/* eslint-disable no-unused-vars */
function submitForm() {
  const formData = {
    title: document.getElementById('title').value,
    content: document.getElementById('content').value,
    date: document.getElementById('dateArticle').value,
    author: document.getElementById('author').value,
    tag: document.getElementById('tag').value,
    image: document.getElementById('imageUrl').value,
  };

  const apiUrl = 'https://api.abdulfaqih.eu.org/article';

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
