exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "develop":
      config.loader("html", function(cfg){
        cfg.test = /\.html$/
        cfg.loader = 'html'
        return cfg;
      })

      break

    case "build-css":
      config.loader("html", function(cfg){
        cfg.test = /\.html$/
        cfg.loader = 'html'
        return cfg;
      })

      break

    case "build-html":
      config.loader("html", function(cfg){
        cfg.test = /\.html$/
        cfg.loader = 'html'
        return cfg;
      })
      break

    case "build-javascript":
      config.loader("html", function(cfg){
        cfg.test = /\.html$/
        cfg.loader = 'html'
        return cfg;
      })
      break
  }

  return config
}

