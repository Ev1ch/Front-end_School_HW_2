import { all, takeEvery, call, put, select } from 'redux-saga/effects';
import { TikTuksService } from 'services';
import { ITikTuk } from 'types/tiktuk';
import * as actionsTypes from './actions-types';
import * as actions from './actions';

function* getTrandingWorker({
  payload: { toSet },
}: ReturnType<typeof actions.getTrending>) {
  try {
    yield put(actions.setLoading({ isLoading: true }));

    const limit: number = yield select((state) => state.trending.options.limit);
    const tiktuks: ITikTuk[] = yield call(TikTuksService.getMany, { limit });

    if (toSet) {
      yield put(actions.setTrending({ tiktuks }));
    } else {
      yield put(actions.addTrending({ tiktuks }));
    }
  } finally {
    yield put(actions.setLoading({ isLoading: false }));
  }
}

function* getTrandingWatcher() {
  yield takeEvery(actionsTypes.GET_TRENDING, getTrandingWorker);
}

function* trendingSaga() {
  yield all([getTrandingWatcher()]);
}

export default trendingSaga;
