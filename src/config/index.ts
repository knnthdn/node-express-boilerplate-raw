import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
  quiet: true,
});

const config = {
  PORT: process.env.PORT || 8000, //port
  NODE_ENV: process.env.NODE_ENV, //node environment
  WHITELIST_ORIGIN: process.env.ALLOWED_DOMAIN?.split(',') || '', //allowed domain for CORS
};

export default config;
