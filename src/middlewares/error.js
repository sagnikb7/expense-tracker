const errorMiddleware = (app) => {
  app.use((req, res) => {
    res.status(404).json({ status: 'NOT_FOUND', data: {}, error: { code: '', message: 'resource not found' } });
  });
};

module.exports = errorMiddleware;
