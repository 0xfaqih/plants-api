const { addPlantHandler, getAllPlantsHandler } = require('./handler');

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
   }
]

module.exports = routes;