import { ITikTuk } from 'domain/tiktuk';
import { callApi } from 'helpers';
import { ApiRoutes } from 'common';

export async function getTikTuks({
  limit,
}: {
  limit: number;
}): Promise<ITikTuk[]> {
  const response = await callApi<ITikTuk[]>({
    endpoint: ApiRoutes.FEED,
    query: { limit },
  });

  return response;
}
