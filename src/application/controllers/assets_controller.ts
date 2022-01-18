import { Router } from "../../../modules/oak.ts";
import { AssetsService } from "../../service/assets_service.ts";

const router = new Router();

router.get("/:distributionId/:fileName+", async ({ response, params }) => {
  if (!params.fileName) return response.status = 505;

  response.body = await AssetsService.retriveAsset(
    params.distributionId,
    params.fileName,
  );
});

export const assetsController = router;
