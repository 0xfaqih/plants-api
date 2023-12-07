const { addPlantHandler, getAllPlantsHandler, getPlantByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/plant',
    handler: addPlantHandler,
  },
  {
    method: 'GET',
    path: '/plant',
    handler: getAllPlantsHandler,
  },
  {
    method: 'GET',
    path: '/plant/{plantId}',
    handler: getPlantByIdHandler,
  },
];

module.exports = routes;
