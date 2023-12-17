document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id');

  fetch(`https://api-article.abdulfaqih.eu.org/article/${articleId}`)
    .then((response) => response.json())
    .then((articleData) => {
      if (articleData.status === 'success') {
        fillEditForm(articleData.data.article);
      } else {
        console.error('Failed to fetch article data for editing.');
      }
    })
    .catch((error) => {
      console.error('Error fetching article data:', error);
    });
});

function fillEditForm(article) {
  document.getElementById('title').value = article.title;
  document.getElementById('description').value = article.content;
  document.getElementById('dateArticle').value = article.place;
  document.getElementById('author').value = article.author;
  document.getElementById('tag').value = article.tag;
  document.getElementById('imageUrl').value = article.image;
}

async function updateForm() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    const updatedArticle = {
      title: document.getElementById('title').value,
      content: document.getElementById('description').value,
      date: document.getElementById('dateArticle').value,
      author: document.getElementById('author').value,
      tag: document.getElementById('tag').value,
      image: document.getElementById('imageUrl').value,
    };

    const response = await fetch(`https://api-article.abdulfaqih.eu.org/article/${articleId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedArticle),
    });

    if (!response.ok) {
      throw new Error(`Failed to update article. Status: ${response.status}`);
    }

    const responseData = await response.json();

    if (responseData.status === 'success') {
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('errorMessage').style.display = 'none';
    } else {
      document.getElementById('errorMessage').style.display = 'block';
      document.getElementById('successMessage').style.display = 'none';
    }
  } catch (error) {
    console.error('Error updating article:', error);
  }
}
