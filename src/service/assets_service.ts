import { AssetsRepository } from "../data/assets_repository.ts";
import { DistributionRepository } from "../data/distribution_repository.ts";

const getAndStoreAsset = async (
  distributionId: string,
  fileName: string,
): Promise<string | undefined> => {
  const distribution = await DistributionRepository.find(distributionId);

  if (!distribution) return undefined;

  const assetRequest = await fetch(`http://${distribution.origin}/${fileName}`);
  const asset = await assetRequest.text();

  return await AssetsRepository.create(distributionId, fileName, asset);
};

const retriveAsset = async (
  distributionId: string,
  fileName: string,
): Promise<string | undefined> => {
  const storedAsset = await AssetsRepository.find(distributionId, fileName);

  return storedAsset ?? getAndStoreAsset(distributionId, fileName);
};

export const AssetsService = {
  retriveAsset,
};