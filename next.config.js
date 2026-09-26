const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  images: {
    unoptimized: true
  },
  webpack(config, options) {
    // Nextra writes the sidebar into the compiled _app page. A cached compile
    // keeps that menu frozen, so pages added later never show up.
    if (!options.dev) {
      config.cache = false;
    }
    return config;
  }
});
