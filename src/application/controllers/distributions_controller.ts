import { Router } from "../../../modules/oak.ts";
import { DistributionService } from "../../service/distribution_service.ts";

const router = new Router();

router.get("/distribution/:id", async ({ response, params }) => {
  response.body = await DistributionService.retriveOrigin(params.id);
});

router.post("/distributions", async ({ response, request }) => {
  const result: { origin: string } = await request.body().value;

  response.body = await DistributionService.registerOrigin(result.origin);
});

router.get("/:id/:fileName", async ({ response, params }) => {
  response.body = await DistributionService.retriveAsset(
    params.id,
    params.fileName,
  );
});

export const distributionsController = router;
