// eslint-disable-next-line object-curly-newline
const { addArticleHandler, getAllArticleHandler, deleteArticleByIdHandler, getArticleByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/article',
    handler: addArticleHandler,
  },
  {
    method: 'GET',
    path: '/articles',
    handler: getAllArticleHandler,
  },
  {
    method: 'GET',
    path: '/article/{articleId}',
    handler: getArticleByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/article/{articleId}',
    handler: deleteArticleByIdHandler,
  },
];

module.exports = routes;
