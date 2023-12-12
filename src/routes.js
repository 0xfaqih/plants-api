const {
  addPlantHandler, getAllPlantsHandler, getPlantByIdHandler, editPlantByIdHandler,
} = require('./handler');

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
  {
    method: 'PUT',
    path: '/plant/{plantId}',
    handler: editPlantByIdHandler,
  },
];

module.exports = routes;
