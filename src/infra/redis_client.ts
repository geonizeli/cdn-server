import { connect } from "../../modules/redis.ts";

export const RedisClient = await connect({
  hostname: "localhost",
  port: 6379,
});
