const Article = require('./models');

const addArticleHandler = async (request, h) => {
  try {
    // eslint-disable-next-line object-curly-newline
    const { title, content, date, author, tag, image } = request.payload;

    const newArticle = new Article({
      title,
      content,
      date,
      author,
      tag,
      image,
    });

    const savedArticle = await newArticle.save();

    const response = h
      .response({
        status: 'success',
        message: 'Artikel berhasil ditambahkan',
        data: {
          article: savedArticle,
        },
      })
      .code(201);

    return response;
  } catch (error) {
    const response = h
      .response({
        status: 'fail',
        message: `Gagal menambahkan Artikel. Alasan: ${error.message}`,
      })
      .code(500);

    return response;
  }
};

const getAllArticleHandler = async (request, h) => {
  try {
    const allArticles = await Article.find();

    const simplifiedArticles = allArticles.map((article) => ({
      id: article.id,
      content: article.content,
      title: article.title,
      tag: article.tag,
      date: article.date,
      image: article.image,
    }));

    const response = h
      .response({
        status: 'success',
        message: 'Berhasil mendapatkan semua artikel',
        data: {
          article: simplifiedArticles,
        },
      })
      .code(200);

    return response;
  } catch (error) {
    const response = h
      .response({
        status: 'fail',
        message: `Gagal mendapatkan artikel. Alasan: ${error.message}`,
      })
      .code(500);

    return response;
  }
};

const getArticleByIdHandler = async (request, h) => {
  try {
    const { articleId } = request.params;
    const articleDetail = await Article.findOne({ _id: articleId });

    if (!articleDetail) {
      const notFoundResponse = h
        .response({
          status: 'fail',
          message: 'Artikel tidak ditemukan',
        })
        .code(404);

      return notFoundResponse;
    }

    const response = h
      .response({
        status: 'success',
        message: 'Berhasil mendapatkan detail artikel',
        data: {
          article: articleDetail,
        },
      })
      .code(200);

    return response;
  } catch (error) {
    const response = h
      .response({
        status: 'fail',
        message: `Gagal mendapatkan detail artikel. Alasan: ${error.message}`,
      })
      .code(500);

    return response;
  }
};

const deleteArticleByIdHandler = async (request, h) => {
  try {
    const { articleId } = request.params;
    const deletedArticle = await Article.findOneAndDelete({ _id: articleId });

    if (!deletedArticle) {
      const notFoundResponse = h
        .response({
          status: 'fail',
          message: 'Artikel tidak ditemukan',
        })
        .code(404);

      return notFoundResponse;
    }

    const response = h
      .response({
        status: 'success',
        message: 'Artikel berhasil dihapus',
        data: {
          article: deletedArticle,
        },
      })
      .code(200);

    return response;
  } catch (error) {
    const response = h
      .response({
        status: 'fail',
        message: `Gagal menghapus artikel. Alasan: ${error.message}`,
      })
      .code(500);

    return response;
  }
};

module.exports = {
  addArticleHandler,
  getAllArticleHandler,
  getArticleByIdHandler,
  deleteArticleByIdHandler,
};
