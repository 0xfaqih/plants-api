/* eslint-disable no-unused-vars */
function submitForm() {
    const formData = {
        common_name: document.getElementById('commonName').value,
        scientific_name: document.getElementById('scientificName').value,
        place: document.getElementById('place').value,
        sunlight: document.getElementById('sunlight').value,
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

    const apiUrl = 'https://api.abdulfaqih.eu.org/plant';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    });
}
