async function fetchArticleData() {
  try {
    const response = await fetch('https://api-article.abdulfaqih.eu.org/articles');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

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

  // Add image
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
  editLink.href = `edit-article.html?id=${article.id}`;
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

function handleDeleteClick(event) {
  const articleId = event.currentTarget.getAttribute('data-article-id');
  // Add logic for handling delete action
  console.log(`Delete article with ID ${articleId}`);
}

window.onload = fetchArticleData;
