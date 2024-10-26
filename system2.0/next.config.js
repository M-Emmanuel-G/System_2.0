const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["utfs.io", "i.gifer.com"]
    }
}

module.exports = nextConfig
