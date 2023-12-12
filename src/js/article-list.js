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

  const titleArticleAnchor = document.createElement('a');
  titleArticleAnchor.href = `detail.html?id=${article.id}`; // Adjust the link as needed
  const titleArticleHeading = document.createElement('h3');
  titleArticleHeading.className = 'title-article';
  titleArticleHeading.textContent = article.title;
  titleArticleAnchor.appendChild(titleArticleHeading);

  const contentParagraph = document.createElement('p');
  contentParagraph.className = 'content-article';
  contentParagraph.textContent = article.content;

  const dateParagraph = document.createElement('p');
  dateParagraph.className = 'date-article';
  dateParagraph.textContent = article.date;

  const authorParagraph = document.createElement('p');
  authorParagraph.className = 'author-article';
  authorParagraph.textContent = article.author;

  const tagParagraph = document.createElement('p');
  tagParagraph.className = 'tag-article';
  tagParagraph.textContent = article.tag;

  const imgElement = document.createElement('img');
  imgElement.src = article.image;
  imgElement.alt = `${article.title} image`;
  imgElement.className = 'img-article';

  articleDiv.appendChild(titleArticleAnchor);
  articleDiv.appendChild(contentParagraph);
  articleDiv.appendChild(dateParagraph);
  articleDiv.appendChild(authorParagraph);
  articleDiv.appendChild(tagParagraph);
  articleDiv.appendChild(imgElement);

  listItem.appendChild(articleDiv);

  return listItem;
}

function displayArticleList(apiResponse) {
  const articleListElement = document.getElementById('articleList');
  articleListElement.innerHTML = ''; // Clear existing content

  const articleList = document.createElement('ul'); // Create a new ul element

  if (apiResponse && apiResponse.status === 'success' && apiResponse.data && apiResponse.data.articles && Array.isArray(apiResponse.data.articles)) {
    apiResponse.data.articles.forEach((article) => {
      const listItem = createArticleListItem(article);
      articleList.appendChild(listItem); // Append each li to the ul
    });
  } else {
    console.error('Unexpected API response structure:', apiResponse);
  }

  articleListElement.appendChild(articleList); // Append the ul to the existing articleListElement
}

// Fetch data when the window is loaded
window.onload = fetchArticleData;
