import { DistributionRepository } from "../data/distribution_repository.ts";

export const DistributionService = {
  retriveOrigin: DistributionRepository.find,
  registerOrigin: DistributionRepository.create,
  list: DistributionRepository.list,
};
