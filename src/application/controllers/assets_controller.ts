import { Router } from "../../../modules/oak.ts";
import { AssetsService } from "../../service/assets_service.ts";

const router = new Router();

router.get("/:distributionId/:fileName", async ({ response, params }) => {
  response.body = await AssetsService.retriveAsset(
    params.distributionId,
    params.fileName,
  );
});

export const assetsController = router;
