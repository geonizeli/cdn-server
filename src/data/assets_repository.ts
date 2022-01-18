import { RedisClient } from "../infra/redis_client.ts";

const path = (paths: string[]): string => paths.join(".");

const find = async (
  id: string,
  fileName: string,
): Promise<string | undefined> => {
  return await RedisClient.get(path([id, "assets", fileName]));
};

const create = async (
  id: string,
  fileName: string,
  content: string,
): Promise<void> => {
  await RedisClient.set(path([id, "assets", fileName]), content);
};

export const AssetsRepository = {
  find,
  create,
};
