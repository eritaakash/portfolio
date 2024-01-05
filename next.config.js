/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
    reactStrictMode: true,
    env: {
        api_key: process.env.API_KEY
    }
}

module.exports = nextConfig
