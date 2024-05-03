const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname:"https://utfs.io"
        }]
    }
}

module.exports = nextConfig
