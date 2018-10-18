<template>
  <section class="section">
    <div class="content">
      <div class="columns" style="flex-flow:wrap;">
          <div v-bind:class="referalContainerClass">
            <div class="content" style="overflow:hidden">
              <div class="columns" style="flex-flow:wrap;">
                <div v-bind:class="zoomClass">
                  <h3>Zoom</h3>
                  <Zoom class="zoomHolder" v-on:updateZoom="updateZoom"/>
                </div>
                <hr v-bind:class="{break:!CC_overflow}">
                <div v-bind:class="ccClass">
                  <h3>Referal</h3>
                  <CreditCard ref="CreditCard"/>
                </div>
              </div>
            </div>
          </div>
          <hr v-bind:class="{break:CC_overflow}">
          <div v-bind:class="keysClass">
            <div class="content" style="overflow-x:hidden;">
              <h3>Key Charts</h3>
              <KeyChart ref="Keys"/>
              <h3>Keycap Ruler</h3>
              <KeyRuler ref="KeyRuler"/>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import CreditCard from './components/credit_card'
import KeyChart from './components/keycaps/key-chart'
import KeyRuler from './components/keycaps/ruler'
import Zoom from './components/zoom_toggle'
export default {
  name: 'App',
  components: { CreditCard, Zoom, KeyChart, KeyRuler },
  data: function() {
    return {
      CC_overflow: false
    }
  },
  methods: {
    updateZoom(value) {
      let factor = value / 100
      this.$refs.CreditCard.$el.style.zoom = `${value}%`
      this.$refs.Keys.$el.style.zoom = `${value}%`
      this.$refs.KeyRuler.$el.style.zoom = `${value}%`
      this.$refs.CreditCard.$el.style.MozTransform = `scale(${factor})`
      this.$refs.CreditCard.$el.style.MozTransformOrigin = '0 0'
      this.$refs.Keys.$el.style.MozTransform = `scale(${factor})`
      this.$refs.Keys.$el.style.MozTransformOrigin = '0 0'
      this.$refs.KeyRuler.$el.style.MozTransform = `scale(${factor})`
      this.$refs.KeyRuler.$el.style.MozTransformOrigin = '0 0'

      // check the size of the credit card
      let CC_space = parseInt(window.getComputedStyle(this.$refs.CreditCard.$el).width)
      let CC_size = CC_space * factor
      if (CC_size > CC_space) {
        this.CC_overflow = true
      } else {
        this.CC_overflow = false
      }
    }
  },
  computed: {
    ccClass: function() {
      return {
        column: true,
        'is-two-third': this.CC_overflow,
        'is-full': !this.CC_overflow
      }
    },
    zoomClass: function() {
      return {
        column: true,
        'is-one-third': this.CC_overflow,
        'is-full': !this.CC_overflow
      }
    },
    referalContainerClass: function() {
      return {
        column: true,
        'is-one-third': !this.CC_overflow,
        'is-full': this.CC_overflow
      }
    },
    keysClass: function() {
      return {
        column: true,
        'is-two-third': !this.CC_overflow,
        'is-full': this.CC_overflow
      }
    }
  },
  mounted() {
    this.CC_overflow = false
  }
}
</script>

<style>
hr.break{
  width:100%;
}
.zoomHolder{
  max-width: 300px;
  text-align: center;
}
</style>
