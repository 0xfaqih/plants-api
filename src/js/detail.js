async function fetchPlantDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const plantId = urlParams.get('id');

  try {
    const response = await fetch(`https://apiplant.abdulfaqih.eu.org/plant/${plantId}`);
    const plantDetail = await response.json();

    displayPlantDetail(plantDetail.data.plant);
  } catch (error) {
    console.error('Error fetching plant detail:', error);
  }
}

function displayPlantDetail(plant) {
  const plantDetailElement = document.getElementById('plantDetail');

  if (plant) {
    const detailHTML = `
            <div class="detail-container">
                <div class="detail-inner">
                    <div class="detail-inner-title">
                        <h2> ${plant.common_name}</h2>
                        <h4>${plant.scientific_name}</h4>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="card-body-text d-flex flex-row p-2">
                            <img src="../../assets/image/ic-house.svg">
                            <p class="my-auto mx-3">${plant.place.join(', ')}</p>
                            </div>
                            <div class="card-body-text d-flex flex-row p-2">
                            <img src="../../assets/image/ic-sun.svg">
                            <p class="my-auto mx-3"> ${plant.sunlight.join(', ')}</p>
                            </div>
                            <div class="card-body-text d-flex flex-row p-2">
                            <img src="../../assets/image/ic-flush.svg">
                            <p class="my-auto mx-3">${plant.watering}</p>
                            </div>
                            <div class="card-body-text d-flex flex-row p-2">
                            <img src="../../assets/image/ic-plant.svg">
                            <p class="my-auto mx-3">${plant.growth}</p>
                            </div>
                            <div class="card-body-text d-flex flex-row p-2">
                            <img src="../../assets/image/ic-care.svg">
                            <p class="my-auto mx-3">${plant.care_level}</p>
                            </div>
                            <div class="card-body-text d-flex flex-row p-2">
                            <img src="../../assets/image/ic-manage.svg">
                            <p class="my-auto mx-3">${plant.management}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail-inner-img">
                    <img src="${plant.image.regular_url}" alt="${plant.common_name}" srcset="">
                </div>
                </div>
                <div class="detail-desc-container">
                <div class="desc-plant">
                    <h3>Deskripsi Tanaman</h3>
                    <p>${plant.description}</p>
                </div>
                <div class="desc-plant mt-4">
                    <h3>Tata Cara Menanam</h3>
                    <p>${plant.manage_type}</p>
                </div>
                </div>
            <!-- Add more details as needed -->
            `;
    plantDetailElement.innerHTML = detailHTML;
  } else {
    plantDetailElement.innerHTML = '<p>Plant not found.</p>';
  }
}
window.onload = fetchPlantDetail;
