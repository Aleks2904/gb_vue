export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gb-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/scss/style.scss',
    '~node_modules/font-awesome/css/font-awesome.css',
  ],
  styleResources: {
    scss: [
      '~assets/css/scss/_variables.scss',
      '~assets/css/scss/_media.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/advancedSelect'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://127.0.0.1:4000/api/v1/',
    proxyHeaders: false,
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: 'http://127.0.0.1:4000/api/v1/'
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: 'http://127.0.0.1:4000/api/v1/'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
    vendor: [
      'vuelidate'
    ]
  },
  buildModules: [
    '@nuxtjs/style-resources',
  ],

}
