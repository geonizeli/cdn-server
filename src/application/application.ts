import { Application } from "../../modules/oak.ts";
import { distributionsController } from "./controllers/distributions_controller.ts";
import { assetsController } from "./controllers/assets_controller.ts";

const app = new Application();

app.use(distributionsController.routes());
app.use(assetsController.routes());

export const server = () => {
  app.listen({ port: 3000 });

  console.log("Server is running on http://localhost:3000");
};
