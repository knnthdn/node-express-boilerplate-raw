import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
  quiet: true,
});

const config = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV,
  WHITELIST_ORIGIN: [
    'https://docs.blog-api.codewithsadee.com',
    'https://docs.blog-api.codewithsadee.net',
  ],
};

export default config;
