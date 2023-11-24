const Plant = require('./models');

const addPlantHandler = async (request, h) => {
   try {
      const { common_name, scientific_name, cycle, propagation, sunlight, pruning_month, care_guides, growth_rate, thorny, invasive, tropical, indoor, care_level, flowers, fruits, leaf, leaf_color, cuisine, medicinal, description, image } = request.payload;
      
      const newPlant = new Plant({
         common_name,
         scientific_name,
         cycle,
         propagation,
         sunlight,
         pruning_month,
         care_guides,
         growth_rate,
         thorny,
         invasive,
         tropical,
         indoor,
         care_level,
         flowers,
         fruits,
         leaf,
         leaf_color,
         cuisine,
         medicinal,
         description,
         image
      });

      const savedPlant = await newPlant.save();

      const response = h.response({
         status: 'success',
         message: 'Tanaman berhasil ditambahkan',
         data: {
            plant: savedPlant, 
         },
      }).code(201);

      return response;
   } catch (error) {
      const response = h.response({
         status: 'fail',
         message: `Gagal menambahkan tanaman. Alasan: ${error.message}`,
      }).code(500);

      return response;
   }
};


const getAllPlantsHandler = async (request, h) => {
   try {
     const allPlants = await Plant.find();
 
     const response = h.response({
       status: 'success',
       message: 'Berhasil mendapatkan semua tanaman',
       data: {
         plants: allPlants,
       },
     }).code(200);
 
     return response;
   } catch (error) {
     const response = h.response({
       status: 'fail',
       message: `Gagal mendapatkan tanaman. Alasan: ${error.message}`,
     }).code(500);
 
     return response;
   }
 };
 

module.exports = {
   addPlantHandler,
   getAllPlantsHandler
};
