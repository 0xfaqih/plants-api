const { addPlantHandler, getAllPlantsHandler, getPlantByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/plant',
    handler: addPlantHandler,
  },
  {
    method: 'GET',
    path: '/plants',
    handler: getAllPlantsHandler,
  },
  {
    method: 'GET',
    path: '/plant/{plantId}',
    handler: getPlantByIdHandler,
  },
];

module.exports = routes;
