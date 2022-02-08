/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  buildOptions: {
    baseUrl: '',
  },
  devOptions:{
    tailwindConfig: './tailwind.config.js'
  },
  plugins:[
    '@snowpack/plugin-postcss'
  ]
}
