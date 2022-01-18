import { RedisClient } from "../infra/redis_client.ts";
import { Distribution } from "../domain/distribution_domain.ts";
const path = (paths: string[]): string => `distribution.${paths.join(".")}`;

const find = async (id: string): Promise<Distribution | undefined> => {
  const origin = await RedisClient.get(path([id, "origin"]));

  if (!origin) return undefined;

  return {
    id,
    origin,
  };
};

const create = async (newOrigin: string): Promise<Distribution> => {
  const id = globalThis.crypto.randomUUID();
  const origin = await RedisClient.set(path([id, "origin"]), newOrigin);

  return {
    id,
    origin,
  };
};

export const DistributionRepository = {
  find,
  create,
};