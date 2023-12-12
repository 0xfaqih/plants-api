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

  const titleArticleAnchor = document.createElement('a');
  titleArticleAnchor.href = `article-detail.html?id=${article.id}`;
  
  const titleArticleHeading = document.createElement('h3');
  titleArticleHeading.className = 'title-article';
  titleArticleHeading.textContent = article.title;

  titleArticleAnchor.appendChild(titleArticleHeading);

  articleDiv.appendChild(titleArticleAnchor);

  listItem.appendChild(articleDiv);

  return listItem;
}


function displayArticleList(apiResponse) {
  const articleListElement = document.getElementById('articleList');
  articleListElement.innerHTML = ''; // Clear existing content

  const articleList = document.createElement('ul'); // Create a new ul element

  if (apiResponse.status === 'success') {
    apiResponse.data.article.forEach((article) => {
      const listItem = createArticleListItem(article);
      articleList.appendChild(listItem);
    });
  } else {
    console.error('Unexpected API response structure:', apiResponse);
  }

  articleListElement.appendChild(articleList); // Append the ul to the existing articleListElement
}

window.onload = fetchArticleData;
