/** @returns {import('webpack').Configuration} Webpack Configuration */
module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  // Add custom rules for your project
  // mp3 & wav files support

  config.module.rules.push({
    test: /\.(mp3|wav)$/,
    type: 'asset/resource',
    generator: {
      filename: 'static/media/[name].[hash][ext]',
    },
  })

  // Add custom plugins for your project
  // config.plugins.push(YOUR_PLUGIN)

  return config
}
