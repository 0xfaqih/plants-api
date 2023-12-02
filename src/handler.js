const Plant = require('./models');

const addPlantHandler = async (request, h) => {
  try {
    const {
      common_name, scientific_name, place, sunlight,
      growth, care_level, management, description, benefits, image,
    } = request.payload;

    const newPlant = new Plant({
      common_name,
      scientific_name,
      place,
      sunlight,
      growth,
      care_level,
      management,
      description,
      benefits,
      image,
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

    const simplifiedPlants = allPlants.map((plant) => ({
      id: plant.id,
      common_name: plant.common_name,
      scientific_name: plant.scientific_name,
      image: plant.image,
    }));

    const response = h.response({
      status: 'success',
      message: 'Berhasil mendapatkan semua tanaman',
      data: {
        plants: simplifiedPlants,
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

const getPlantByIdHandler = async (request, h) => {
  try {
    const plantId = request.params.id;
    const plantDetail = await Plant.findOne({ id: plantId });

    if (!plantDetail) {
      const notFoundResponse = h.response({
        status: 'fail',
        message: 'Tanaman tidak ditemukan',
      }).code(404);

      return notFoundResponse;
    }

    const response = h.response({
      status: 'success',
      message: 'Berhasil mendapatkan detail tanaman',
      data: {
        plant: plantDetail,
      },
    }).code(200);

    return response;
  } catch (error) {
    const response = h.response({
      status: 'fail',
      message: `Gagal mendapatkan detail tanaman. Alasan: ${error.message}`,
    }).code(500);

    return response;
  }
};

module.exports = {
  addPlantHandler,
  getAllPlantsHandler,
  getPlantByIdHandler,
};
