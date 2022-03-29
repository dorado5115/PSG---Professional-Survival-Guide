/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,      
  env: {
    MONGO_URL: process.env.MONGO_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  }
}

module.exports = nextConfig
