const fastify = require("fastify")({
  logger: true,
  ignoreTrailingSlash: true,
});
fastify.register(require("./aboutRoute"));

const start = async () => {
  try {
    await fastify.listen({ port: 2000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
