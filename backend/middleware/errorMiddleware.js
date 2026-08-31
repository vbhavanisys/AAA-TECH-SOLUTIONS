/**
 * Centralized Error Handling Middlewares
 */

exports.notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `API endpoint ${req.method} ${req.originalUrl} not found.`
  });
};

exports.errorHandler = (err, req, res, next) => {
  console.error(`[SERVER ERROR] ${req.method} ${req.originalUrl}:`, err);

  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  
  res.status(statusCode).json({
    success: false,
    message: err.message || 'An unexpected internal server error occurred.',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};
