import { DistributionRepository } from "../data/distribution_repository.ts";
import { Distribution } from "../domain/distribution_domain.ts";

const retriveOrigin = async (
  distributionId: string,
): Promise<Distribution | undefined> => {
  return await DistributionRepository.find(distributionId);
};

const registerOrigin = async (origin: string): Promise<Distribution> => {
  return await DistributionRepository.create(origin);
};

export const DistributionService = {
  retriveOrigin,
  registerOrigin,
};
