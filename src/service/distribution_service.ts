import { DistributionRepository } from "../data/distribution_repository.ts";
import { Distribution } from "../domain/distribution_domain.ts";
import { notEmpty } from "../utils/notEmpty.ts";

const retriveOrigin = async (
  distributionId: string
): Promise<Distribution | undefined> => {
  return await DistributionRepository.find(distributionId);
};

const registerOrigin = async (origin: string): Promise<Distribution> => {
  return await DistributionRepository.create(origin);
};

const list = async (): Promise<Distribution[]> => {
  const distributionsIds = await DistributionRepository.listIds();

  const distributions = await Promise.all(distributionsIds.map(retriveOrigin));

  return distributions.filter(notEmpty);
};

export const DistributionService = {
  retriveOrigin,
  registerOrigin,
  list,
};
