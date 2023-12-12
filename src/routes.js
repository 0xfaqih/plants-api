const {
  addPlantHandler,
  getAllPlantsHandler,
  getPlantByIdHandler,
  editPlantByIdHandler,
  deletePlantByIdHandler,
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
  {
    method: 'DELETE',
    path: '/plant/{plantId}',
    handler: deletePlantByIdHandler,
  },
];

module.exports = routes;
