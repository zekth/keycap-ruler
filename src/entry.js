import Vue from 'vue'
import App from './app'
import './assets/sass/style.scss'
import VueI18n from 'vue-i18n'
import { messages } from './assets/i18n/messages'
import { Plugin } from 'vue-fragment'
Vue.use(VueI18n)
Vue.use(Plugin)
const isFr = (navigator.language || navigator.userLanguage).toLowerCase().indexOf('fr') >= 0
const i18n = new VueI18n({
  locale: isFr ? 'fr' : 'en',
  fallbackLocale: 'en',
  messages
})

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>',
  mounted() {}
})
