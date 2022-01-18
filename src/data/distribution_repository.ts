import { RedisClient } from "../infra/redis_client.ts";
import { Distribution } from "../domain/distribution_domain.ts";
import { notEmpty } from "../utils/notEmpty.ts";

const path = (...paths: string[]): string => `distribution.${paths.join(".")}`;

const list = async (): Promise<Distribution[]> => {
  const keys = await RedisClient.keys("distribution*");

  const ids = keys.map((key) =>
    key.replace("distribution.", "").replace(".origin", "")
  );

  const distributions = await Promise.all(ids.map(find));

  return distributions.filter(notEmpty);
};

const find = async (id: string): Promise<Distribution | undefined> => {
  const origin = await RedisClient.get(path(id, "origin"));

  if (!origin) return undefined;

  return {
    id,
    origin,
  };
};

const create = async (newOrigin: string): Promise<Distribution> => {
  const id = globalThis.crypto.randomUUID();
  const origin = await RedisClient.set(path(id, "origin"), newOrigin);

  return {
    id,
    origin,
  };
};

export const DistributionRepository = {
  list,
  find,
  create,
};
