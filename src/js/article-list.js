/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
async function fetchArticleData() {
  try {
    const response = await fetch('https://api-article.abdulfaqih.eu.org/articles');
    const articleData = await response.json();

    displayArticleList(articleData);
  } catch (error) {
    console.error('Error fetching article data:', error);
  }
}

function createArticleListItem(article) {
  const listItem = document.createElement('li');
  listItem.className = 'item-article';

  const articleDiv = document.createElement('div');
  articleDiv.className = 'article';

  const imgArticle = document.createElement('img');
  imgArticle.src = article.image; // Replace with the actual image field from your API response
  imgArticle.alt = `Image for ${article.title}`;
  imgArticle.className = 'img-article';
  articleDiv.appendChild(imgArticle);

  const titleArticleAnchor = document.createElement('a');
  titleArticleAnchor.href = `article-detail.html?id=${article.id}`;

  const titleArticleHeading = document.createElement('h3');
  titleArticleHeading.className = 'title-article';
  titleArticleHeading.textContent = article.title;

  titleArticleAnchor.appendChild(titleArticleHeading);

  articleDiv.appendChild(titleArticleAnchor);

  const iconArticleDiv = document.createElement('div');
  iconArticleDiv.className = 'icon-article';

  const deleteLink = document.createElement('a');
  deleteLink.href = '#';
  deleteLink.setAttribute('data-article-id', article.id);
  deleteLink.addEventListener('click', handleDeleteClick);

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'ic material-symbols-outlined';
  deleteIcon.textContent = 'delete';
  deleteLink.appendChild(deleteIcon);

  const editLink = document.createElement('a');
  editLink.href = `form-edit-article.html?id=${article.id}`;
  const editIcon = document.createElement('i');
  editIcon.className = 'ic material-symbols-outlined';
  editIcon.textContent = 'edit';
  editLink.appendChild(editIcon);

  iconArticleDiv.appendChild(deleteLink);
  iconArticleDiv.appendChild(editLink);

  articleDiv.appendChild(iconArticleDiv);

  listItem.appendChild(articleDiv);

  return listItem;
}

function displayArticleList(apiResponse) {
  const articleListElement = document.getElementById('articleList');
  articleListElement.innerHTML = ''; // Clear existing content

  const articleList = document.createElement('ul'); // Create a new ul element

  if (apiResponse.status === 'success' && apiResponse.data.article) {
    apiResponse.data.article.forEach((article) => {
      const listItem = createArticleListItem(article);
      articleList.appendChild(listItem);
    });
  } else {
    console.error('Unexpected API response structure:', apiResponse);
  }

  articleListElement.appendChild(articleList); // Append the ul to the existing articleListElement
}

async function handleDeleteClick(event) {
  event.preventDefault();

  const articleId = event.currentTarget.getAttribute('data-article-id');

  if (confirm('Apakah Anda yakin ingin menghapus artikel ini?')) {
    await deleteArticleById(articleId);
  }
}

async function deleteArticleById(articleId) {
  try {
    const response = await fetch(`https://api-article.abdulfaqih.eu.org/article/${articleId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();

    if (response.ok) {
      console.log('Artikel berhasil dihapus:', responseData);
      // You might want to refresh the article list after deletion
      fetchArticleData();
    } else {
      console.error('Gagal menghapus artikel:', responseData);
    }
  } catch (error) {
    console.error('Error deleting article:', error);
  }
}

window.onload = fetchArticleData;
