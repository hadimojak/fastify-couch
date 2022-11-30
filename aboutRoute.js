const { bucket, collection } = require("./conn");
const { fork } = require("child_process");

async function route(fastify, opts, next) {
  // fastify.get("/", async (req, res) => {
  //   // const result = await collection.insert("hadi1", { age: 123 });
  //   return res.send('result');
  // });

  fastify.route(
    {
      method: "POST",
      url: "/:age",
      schema: {
        querystring: {
          name: { type: "string" },
        },
        response: {
          200: {
            type: "object",
            properties: {
              hello: { type: "string" },
            },
          },
        },
      },
      handler: async function (request, reply) {
        // console.log(request.query.name);
        // console.log(request.params);
        // request.server.ready(() => {
        //   console.log("asd");
        // });
        // console.log(request.server);
        const result = await collection.insert("hadi", {
          user: "asasd",
          age: 2222,
        });
        console.log(result);
        reply.send({ hello: 54 });
      },
    },
    next
  );

  fastify.post("/hadi", async (req, res) => {
  

    const childProcess = fork("./routeProcess.js");
    const data = req.body;
    // send send the data to forked process
    childProcess.send(data, (error) => {
      if (error) {
        console.log("error");
      }
      console.log("sending");
    });
    childProcess.on("message", (recieve) => {
      console.log(recieve);
    });
    // return res.send({ status: true, sent: true });
  });
}

module.exports = route;
