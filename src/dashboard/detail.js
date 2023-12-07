async function fetchPlantDetail() {
   const urlParams = new URLSearchParams(window.location.search);
   const plantId = urlParams.get('id');

   try {
       const response = await fetch(`https://api.abdulfaqih.eu.org/plant/${plantId}`);
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
           <p><strong>Common Name:</strong> ${plant.common_name}</p>
           <p><strong>Scientific Name:</strong> ${plant.scientific_name}</p>
           <p><strong>Place:</strong> ${plant.place.join(', ')}</p>
           <p><strong>Sunlight:</strong> ${plant.sunlight.join(', ')}</p>
           <p><strong>Growth:</strong> ${plant.growth}</p>
           <p><strong>Care Level:</strong> ${plant.care_level}</p>
           <p><strong>Management:</strong> ${plant.management}</p>
           <p><strong>Description:</strong> ${plant.description}</p>
           <p><strong>Tipe Kelola:</strong> ${plant.manage_type}</p>
           <img src="${plant.image.regular_url}" alt="${plant.common_name} Image">
           <!-- Add more details as needed -->
       `;
       plantDetailElement.innerHTML = detailHTML;
   } else {
       plantDetailElement.innerHTML = '<p>Plant not found.</p>';
   }
}
window.onload = fetchPlantDetail;