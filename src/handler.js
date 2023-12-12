const Plant = require('./models');

const addPlantHandler = async (request, h) => {
  try {
    const {
      common_name, scientific_name, place, sunlight, watering,
      growth, care_level, management, description, manage_type, image,
    } = request.payload;

    const newPlant = new Plant({
      common_name,
      scientific_name,
      place,
      sunlight,
      watering,
      growth,
      care_level,
      management,
      description,
      manage_type,
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
    const { plantId } = request.params;
    const plantDetail = await Plant.findOne({ _id: plantId });

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

const editPlantByIdHandler = async (request, h) => {
  try {
    const { plantId } = request.params;
    const {
      common_name, scientific_name, place, sunlight, watering,
      growth, care_level, management, description, manage_type, image,
    } = request.payload;

    const plantToUpdate = await Plant.findById(plantId);

    if (!plantToUpdate) {
      const response = h.response({
        status: 'fail',
        message: 'Tanaman tidak ditemukan',
      }).code(404);

      return response;
    }

    plantToUpdate.common_name = common_name;
    plantToUpdate.scientific_name = scientific_name;
    plantToUpdate.place = place;
    plantToUpdate.sunlight = sunlight;
    plantToUpdate.watering = watering;
    plantToUpdate.growth = growth;
    plantToUpdate.care_level = care_level;
    plantToUpdate.management = management;
    plantToUpdate.description = description;
    plantToUpdate.manage_type = manage_type;
    plantToUpdate.image = image;

    const updatedPlant = await plantToUpdate.save();

    const response = h.response({
      status: 'success',
      message: 'Tanaman berhasil diperbarui',
      data: {
        plant: updatedPlant,
      },
    }).code(200);

    return response;
  } catch (error) {
    const response = h.response({
      status: 'fail',
      message: `Gagal memperbarui tanaman. Alasan: ${error.message}`,
    }).code(500);

    return response;
  }
};

const deletePlantByIdHandler = async (request, h) => {
  try {
    const { plantId } = request.params;
    const deletedPlant = await Plant.findByIdAndDelete(plantId);

    if (!deletedPlant) {
      const notFoundResponse = h.response({
        status: 'fail',
        message: 'Tanaman tidak ditemukan',
      }).code(404);

      return notFoundResponse;
    }

    const successResponse = h.response({
      status: 'success',
      message: 'Tanaman berhasil dihapus',
      data: {
        plant: deletedPlant,
      },
    }).code(200);

    return successResponse;
  } catch (error) {
    const response = h.response({
      status: 'fail',
      message: `Gagal menghapus tanaman. Alasan: ${error.message}`,
    }).code(500);

    return response;
  }
};

module.exports = {
  addPlantHandler,
  getAllPlantsHandler,
  getPlantByIdHandler,
  editPlantByIdHandler,
  deletePlantByIdHandler,
};
