/** @type {import('next').NextConfig} */

const repo = 'boquitas-sanas'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  // basePath,
  // assetPrefix,
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig
