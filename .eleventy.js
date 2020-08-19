module.exports = function(config) {
  config.addPassthroughCopy({ public: './' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
  })

  return {
    templateFormats: ['md', 'jpg', 'png', 'gif', 'njk'],
    dir: {
      input: 'src',
      output: 'dist',
      layouts: 'app/layouts',
    }
  }
}
