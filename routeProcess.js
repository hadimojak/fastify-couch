// receive message from master process
const { bucket, collection } = require("./conn");

process.on("message", async (message) => {
  // send response to master process
  const user = await collection.get("hadi");
  process.send({ ...message, ...user.content });
});
