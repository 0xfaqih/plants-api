async function fetchPlantData() {
    try {
        const response = await fetch('https://apiplant.abdulfaqih.eu.org/plant');
        const plantData = await response.json();

        displayPlantList(plantData);
    } catch (error) {
        console.error('Error fetching plant data:', error);
    }
}

function createPlantListItem(plant) {
    const listItem = document.createElement('li');
    listItem.className = 'item-plant';

    const plantDiv = document.createElement('div');
    plantDiv.className = 'plant';

    const imgElement = document.createElement('img');
    imgElement.src = plant.image.regular_url;
    imgElement.alt = `${plant.common_name} image`;
    imgElement.className = 'img-plant';

    const namePlantDiv = document.createElement('div');
    namePlantDiv.className = 'name-plant';

    const commonNameAnchor = document.createElement('a');
    commonNameAnchor.href = `detail.html?id=${plant.id}`; // Adjust the link as needed
    const commonNameHeading = document.createElement('h3');
    commonNameHeading.className = 'commonName';
    commonNameHeading.id = 'name';
    commonNameHeading.textContent = plant.common_name;
    commonNameAnchor.appendChild(commonNameHeading);

    const scientificNameParagraph = document.createElement('p');
    scientificNameParagraph.className = 'scientificName';
    scientificNameParagraph.textContent = plant.scientific_name;

    namePlantDiv.appendChild(commonNameAnchor);
    namePlantDiv.appendChild(scientificNameParagraph);

    const iconPlantDiv = document.createElement('div');
    iconPlantDiv.className = 'icon-plant';

    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.setAttribute('data-plant-id', plant.id); 
    deleteLink.addEventListener('click', handleDeleteClick);
    
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'ic material-symbols-outlined';
    deleteIcon.textContent = 'delete';
    deleteLink.appendChild(deleteIcon);

    const editLink = document.createElement('a');
    editLink.href = `form-edit-plant.html?id=${plant.id}`;
    const editIcon = document.createElement('i');
    editIcon.className = 'ic material-symbols-outlined';
    editIcon.textContent = 'edit';
    editLink.appendChild(editIcon);

    iconPlantDiv.appendChild(deleteLink);
    iconPlantDiv.appendChild(editLink);

    plantDiv.appendChild(imgElement);
    plantDiv.appendChild(namePlantDiv);
    plantDiv.appendChild(iconPlantDiv);

    listItem.appendChild(plantDiv);

    return listItem;
}

function displayPlantList(apiResponse) {
    const plantListElement = document.getElementById('plantList');
    plantListElement.innerHTML = '';

    if (
        apiResponse
        && apiResponse.status === 'success'
        && apiResponse.data
        && apiResponse.data.plants
        && Array.isArray(apiResponse.data.plants)
    ) {
        apiResponse.data.plants.forEach((plant) => {
            const listItem = createPlantListItem(plant);
            plantListElement.appendChild(listItem);
        });
    } else {
        console.error('Unexpected API response structure:', apiResponse);
    }
}

function handleDeleteClick(event) {
    event.preventDefault();
  
    const plantId = event.currentTarget.getAttribute('data-plant-id');
  
    if (confirm('Apakah Anda yakin ingin menghapus tanaman ini?')) {
      deletePlantById(plantId);
    }
  }
  
  async function deletePlantById(plantId) {
    try {
      const response = await fetch(`https://apiplant.abdulfaqih.eu.org/plant/${plantId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        console.log('Tanaman berhasil dihapus:', responseData);
      } else {
        console.error('Gagal menghapus tanaman:', responseData);
      }
    } catch (error) {
      console.error('Error deleting plant:', error);
    }
  }

window.onload = fetchPlantData;
