module.exports = (app) => {
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message,
    });
  });
  next();
}