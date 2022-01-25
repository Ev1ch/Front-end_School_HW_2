import callApi from 'api';
import { ApiRoutes } from 'common';
import { IUser } from 'domain/user';
import { IFeed } from 'domain/feed';

export async function getUser({ nick }: { nick: string }): Promise<IUser> {
  const response = await callApi<IUser>({
    endpoint: ApiRoutes.USER.INFO(nick),
  });

  return response;
}

export async function getUserFeed({
  limit,
  nick,
}: {
  limit: number;
  nick: string;
}): Promise<IFeed> {
  const response = await callApi<IFeed>({
    endpoint: ApiRoutes.USER.FEED(nick),
    query: { limit },
  });

  return response;
}
