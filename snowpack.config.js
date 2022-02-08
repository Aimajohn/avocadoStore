/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    baseUrl: 'https://Aimajoke.github.io/avocadoStore',
  },
  devOptions:{
    tailwindConfig: './tailwind.config.js'
  },
  plugins:[
    '@snowpack/plugin-postcss'
  ]
}
