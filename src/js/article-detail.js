// article-detail.js

async function fetchArticleDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id');

  try {
    const response = await fetch(`https://api-article.abdulfaqih.eu.org/article/${articleId}`);
    const articleDetail = await response.json();

    displayArticleDetail(articleDetail.data.article);
  } catch (error) {
    console.error('Error fetching article detail:', error);
  }
}

function displayArticleDetail(article) {
  const articleDetailElement = document.getElementById('articleDetail');

  if (article) {
    const detailHTML = `
    <div class="container">
      <div class="content mx-auto d-flex flex-column">
        <div class="article d-flex flex-column align-items-center">
          <h1 class="article-title"> ${article.title}</h1>
          <div class="img-article">
          <img src="${article.image}" alt="${article.title}" srcset="">
            <div class="data-article">
              <p class="tanggal">${new Date(article.date).toLocaleDateString()}</p>
              <p class="penulis">${article.author}</p>
              <p class="tag">${article.tag}</p>
            </div>
          </div>

          <div class="article-content">
            <p>${article.content}</p>
            </div>
          </div>
          </div>
          </div>
          
        `;
    articleDetailElement.innerHTML = detailHTML;
  } else {
    articleDetailElement.innerHTML = '<p>Article not found.</p>';
  }
}

window.onload = fetchArticleDetail;
