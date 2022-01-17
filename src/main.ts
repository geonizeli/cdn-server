import { Application } from "../modules/oak.ts";

const app = new Application();

export const main = async () => {
  app.use((ctx) => {
    ctx.response.body = {
      message: "Hello world!",
    };
  });

  await app.listen({ port: 3000 });
};
