const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  let errorMessage = err.message || 'Server Error';

  if (err.name === 'CastError') {
    res.status(400);
    errorMessage = 'Invalid recipe ID';
  }

  if (err.name === 'ValidationError') {
    res.status(400);
    errorMessage = Object.values(err.errors).map((val) => val.message).join(', ');
  }

  res.status(res.statusCode || statusCode).json({
    success: false,
    error: errorMessage
  });
};

module.exports = errorHandler;
