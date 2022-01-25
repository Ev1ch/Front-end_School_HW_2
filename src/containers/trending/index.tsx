import React, { useEffect } from 'react';
import { Loader, TrendingPage } from 'components';
import { useAppDispatch } from 'store';
import { useTikTuksSelector } from 'store/trending';
import * as actions from 'store/trending/actions';

const TrendingContainer = function TrendingContainer(): JSX.Element {
  const { items: tiktuks, isLoading } = useTikTuksSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getTrending({ toSet: true }));
  }, []);

  return !isLoading && tiktuks ? (
    <TrendingPage tiktuks={tiktuks} />
  ) : (
    <Loader />
  );
};

export default TrendingContainer;
