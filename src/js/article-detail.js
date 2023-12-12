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
            <div class="detail-container mx-auto">
                <div class="detail-inner">
                    <div class="detail-inner-title">
                        <h2> ${article.title}</h2>
                        <h4>${article.author}</h4>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="card-body-text d-flex flex-row p-2">
                                <img src="../../assets/image/ic-calendar.svg">
                                <p class="my-auto mx-3">${article.date}</p>
                            </div>
                            <div class="card-body-text d-flex flex-row p-2">
                                <img src="../../assets/image/ic-tag.svg">
                                <p class="my-auto mx-3"> ${article.tag}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="detail-inner-img">
                    <img src="${article.image}" alt="${article.title}" srcset="">
                </div>
            </div>
            <div class="detail-desc-container">
                <div class="desc-article">
                    <h3>Konten Artikel</h3>
                    <p>${article.content}</p>
                </div>
            </div>
            <!-- Add more details as needed -->
        `;
    articleDetailElement.innerHTML = detailHTML;
  } else {
    articleDetailElement.innerHTML = '<p>Article not found.</p>';
  }
}

window.onload = fetchArticleDetail;
