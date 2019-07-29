<template>
  <Fragment>
    <header-app />
    <rulerApp />
    <howitworks />
    <contribute />
    <appFooter />
  </Fragment>
</template>

<script>
import rulerApp from './components/rulerApp.vue'
import howitworks from './components/howitworks.vue'
import headerApp from './components/headerApp.vue'
import appFooter from './components/footer.vue'
import contribute from './components/contribute.vue'
import { Fragment } from 'vue-fragment'
import './assets/sass/style.scss'

export default {
  name: 'app',
  components: { Fragment, rulerApp, appFooter, howitworks, headerApp, contribute }
}
</script>
