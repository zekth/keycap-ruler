<template>
  <div>
    <div class="columns">
      <div class="column is-one-third">
        <div  class="content">
        <h3>Referal</h3>
        <CreditCard ref="CreditCard"/>
        <h3>Zoom</h3>
        <Zoom v-on:updateZoom="updateZoom"/>
      </div>
      </div>
      <div class="column is-two-third">
        <div  class="content">
          <h3>Key Charts</h3>
          <KeyChart ref="Keys"/>
          <h3>Keycap Ruler</h3>
        <KeyRuler ref="KeyRuler"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreditCard from './components/credit_card'
import KeyChart from './components/keycaps/key-chart'
import KeyRuler from './components/keycaps/ruler'
import Zoom from './components/zoom_toggle'
export default {
  name: 'App',
  components: { CreditCard, Zoom, KeyChart, KeyRuler },
  methods: {
    updateZoom(value) {
      this.$refs.CreditCard.$el.style.zoom = `${value}%`
      this.$refs.Keys.$el.style.zoom = `${value}%`
      this.$refs.KeyRuler.$el.style.zoom = `${value}%`
      this.$refs.CreditCard.$el.style.MozTransform = `scale(${value / 100})`
      this.$refs.CreditCard.$el.style.MozTransformOrigin = '0 0'
      this.$refs.Keys.$el.style.MozTransform = `scale(${value / 100})`
      this.$refs.Keys.$el.style.MozTransformOrigin = '0 0'
      this.$refs.KeyRuler.$el.style.MozTransform = `scale(${value / 100})`
      this.$refs.KeyRuler.$el.style.MozTransformOrigin = '0 0'
    }
  }
}
</script>
