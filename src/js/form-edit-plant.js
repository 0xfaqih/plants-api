document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const plantId = urlParams.get('id');

  fetch(`https://apiplant.abdulfaqih.eu.org/plant/${plantId}`)
    .then((response) => response.json())
    .then((plantData) => {
      if (plantData.status === 'success') {
        fillEditForm(plantData.data.plant);
      } else {
        console.error('Failed to fetch plant data for editing.');
      }
    })
    .catch((error) => {
      console.error('Error fetching plant data:', error);
    });
});

function fillEditForm(plant) {
  document.getElementById('commonName').value = plant.common_name;
  document.getElementById('scientificName').value = plant.scientific_name;
  document.getElementById('place').value = plant.place;
  document.getElementById('sunlight').value = plant.sunlight;
  document.getElementById('watering').value = plant.watering;
  document.getElementById('growth').value = plant.growth;
  document.getElementById('careLevel').value = plant.care_level;
  document.getElementById('management').value = plant.management;
  document.getElementById('description').value = plant.description;
  document.getElementById('manage_type').value = plant.manage_type;
  document.getElementById('regularUrl').value = plant.image.regular_url;
  document.getElementById('mediumUrl').value = plant.image.medium_url;
  document.getElementById('smallUrl').value = plant.image.small_url;
}

async function updateForm() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const plantId = urlParams.get('id');

    const updatedPlant = {
      common_name: document.getElementById('commonName').value,
      scientific_name: document.getElementById('scientificName').value,
      place: document.getElementById('place').value,
      sunlight: document.getElementById('sunlight').value,
      watering: document.getElementById('watering').value,
      growth: document.getElementById('growth').value,
      care_level: document.getElementById('careLevel').value,
      management: document.getElementById('management').value,
      description: document.getElementById('description').value,
      manage_type: document.getElementById('manage_type').value,
      image: {
        regular_url: document.getElementById('regularUrl').value,
        medium_url: document.getElementById('mediumUrl').value,
        small_url: document.getElementById('smallUrl').value,
      },
    };

    const response = await fetch(`https://apiplant.abdulfaqih.eu.org/plant/${plantId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPlant),
    });

    const responseData = await response.json();

  if (responseData.status === 'success') {
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';
  } else {
    document.getElementById('errorMessage').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
  }
  } catch (error) {
    console.error('Error updating plant:', error);
  }
}
