import { Application } from "../../modules/oak.ts";
import { distributionsController } from "./controllers/distributions_controller.ts";
import { assetsController } from "./controllers/assets_controller.ts";

const app = new Application();

app.use(async (context, next) => {
  await next();

  console.log(`${context.request.method} ${context.request.url}`);
});

app.use(distributionsController.routes());
app.use(assetsController.routes());

export const server = () => {
  app.listen({ port: 3000 });

  console.info("Server is running on http://localhost:3000");
};
