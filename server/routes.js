const additionRouter = require('./routes/additionRouter');

const routes = app => {
  app.use('/api/v1/addition', additionRouter);
};

module.exports = routes;
