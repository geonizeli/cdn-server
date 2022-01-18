import { RedisClient } from "../infra/redis_client.ts";

const path = (paths: string[]): string => paths.join(".");

const find = async (
  id: string,
  fileName: string,
): Promise<string | undefined> => {
  return await RedisClient.get(path([id, "assets", fileName]));
};

export const AssetsRepository = {
  find,
};
