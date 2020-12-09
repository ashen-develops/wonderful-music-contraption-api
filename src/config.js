module.exports = {
  PORT: process.env.PORT || 8080,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/wonderful-music-contraption',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret'
};
