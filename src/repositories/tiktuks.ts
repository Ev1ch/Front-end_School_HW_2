import Api from 'api';
import { ITikTuk } from 'domain/tiktuk';
import { ApiRoutes } from 'common';

export async function getTikTuks({
  limit,
}: {
  limit: number;
}): Promise<ITikTuk[]> {
  const response = await Api.get<ITikTuk[]>({
    endpoint: ApiRoutes.FEED,
    query: { limit },
  });

  return response;
}
