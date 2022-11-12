const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: 'localhost',
  });

  await server.start();
  console.log(`server running on ${server.info.uri}`);
};

init();
