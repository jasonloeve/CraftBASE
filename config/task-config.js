module.exports = {
  images: true,
  fonts: true,
  svgSprite: true,
  stylesheets: true,

  static: {
    srcOptions: {
      dot: true // include dotfiles
    }
  },

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ['./app.js']
    },
    // This tells webpack middleware where to
    // serve js files from in development:
    publicPath: '/assets/javascripts',
    provide: {
      $: 'jquery',
      jQuery: 'jquery'
    }
  },

  browserSync: {
    // Update this to match your development URL
    proxy: 'grand.dev',
    files: ['craft/templates/**/*'],
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function(snippet, match) {
          return snippet + match;
        }
      }
    }
  },

  production: {
    rev: true
  },

  ghPages: false,
  html: false
};
