import { DistributionRepository } from "../data/distribution_repository.ts";
import { AssetsRepository } from "../data/assets_repository.ts";
import { Distribution } from "../domain/distribution_domain.ts";

const retriveOrigin = async (
  distributionId: string,
): Promise<Distribution | undefined> => {
  return await DistributionRepository.find(distributionId);
};

const registerOrigin = async (origin: string): Promise<Distribution> => {
  return await DistributionRepository.create(origin);
};

const retriveAsset = async (
  distributionId: string,
  fileName: string,
): Promise<string | undefined> => {
  return await AssetsRepository.find(distributionId, fileName);
};

export const DistributionService = {
  retriveOrigin,
  registerOrigin,
  retriveAsset,
};
