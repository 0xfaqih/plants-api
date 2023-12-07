async function fetchPlantData() {
    try {
        const response = await fetch('https://api.abdulfaqih.eu.org/plant');
        const plantData = await response.json();

        displayPlantList(plantData);
    } catch (error) {
        console.error('Error fetching plant data:', error);
    }
}

function displayPlantList(apiResponse) {
 const plantListElement = document.getElementById('plantList');

 plantListElement.innerHTML = '';

 if (
     apiResponse &&
     apiResponse.status === 'success' &&
     apiResponse.data &&
     apiResponse.data.plants &&
     Array.isArray(apiResponse.data.plants)
 ) {
     apiResponse.data.plants.forEach(plant => {
         const listItem = document.createElement('li');
         const anchorElement = document.createElement('a');
         anchorElement.textContent = plant.common_name;
         anchorElement.href = `detail.html?id=${plant.id}`;
         listItem.appendChild(anchorElement);
         plantListElement.appendChild(listItem);
     });
 } else {
     console.error('Unexpected API response structure:', apiResponse);
 }
}


window.onload = fetchPlantData;