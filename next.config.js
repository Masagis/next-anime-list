const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const webpack = require('webpack')
const DotEnv = require('dotenv')
const path = require('path')

DotEnv.config()

module.exports = withPlugins([withFonts], {
  exportPathMap() {
    return {
      '/': { page: '/' },
    }
  },
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    config.resolve.alias = {
      ...config.resolve.alias,
      '@actions': path.resolve('src/store/actions'),
      '@components': path.resolve('src/components'),
      '@containers': path.resolve('src/containers'),
      '@configs': path.resolve('src/configs'),
      '@reducers': path.resolve('src/store/reducers'),
    }
    return config
  },
})
