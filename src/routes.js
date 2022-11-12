const { addNoteToHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: './notes',
    handler: addNoteToHandler,
  },
];

module.exports = routes;
