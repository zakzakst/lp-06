export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'lp-06',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    base: '/works/lp-06',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/style.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '@/plugins/vue-scrollto'},
    {src: '@/plugins/vue-slick-carousel'},
    {src: '@/plugins/vee-validate'},
    {src: '@/plugins/snapsvg-cjs', mode: 'client'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    'nuxt-webfontloader',
    'cookie-universal-nuxt',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    transpile: [
      'gsap',
      'vee-validate/dist/rules',
    ],
  },

  // generate: {
  //   dir: 'works/lp-06'
  // },

  styleResources: {
    scss: [
      '@/assets/sass/base/_variables.scss'
    ]
  },

  webfontloader: {
    google: {
      families: ['Noto+Serif+JP:wght@400;700']
    }
  },

  loading: '@/components/loading.vue',
}
