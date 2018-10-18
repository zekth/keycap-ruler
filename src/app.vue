<template>
  <section class="section">
    <div class="content">
      <div class="columns" style="flex-flow:wrap;">
          <div id="referalContainer" ref="referalContainer" v-bind:class="referalContainerClass">
            <div class="content">
              <div class="columns" style="flex-flow:wrap;">
                <div v-bind:class="zoomClass">
                  <h3>Zoom</h3>
                  <Zoom class="zoomHolder" v-on:updateZoom="updateZoom"/>
                </div>
                <hr v-bind:class="{break:!CC_overflow}">
                <div style="overflow-x:hidden" v-bind:class="ccClass">
                  <h3>Referal</h3>
                  <CreditCard ref="CreditCard"/>
                </div>
              </div>
            </div>
          </div>
          <hr v-bind:class="{break:CC_overflow}">
          <div v-bind:class="keysClass">
            <div class="content" style="overflow-x:hidden;">
              <h3 class="is-hidden-mobile">Keycap Ruler</h3>
              <KeyRuler style="margin-bottom:70px;" class="is-hidden-mobile" ref="KeyRuler"/>
              <h3>Key Charts</h3>
              <KeyChart id="Keys" ref="Keys"/>
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
      let CC_width = parseInt(window.getComputedStyle(this.$refs.CreditCard.$el).width)
      let CC_height = parseInt(window.getComputedStyle(this.$refs.CreditCard.$el).height)
      let CC_realWidth = CC_width * factor
      let CC_realHeight = CC_height * factor
      console.log(navigator.userAgent)
      let isFF = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
      if (window.innerWidth < 768) {
        this.$refs.referalContainer.style.height = ``
      } else {
        if (CC_realWidth > CC_width) {
          this.CC_overflow = true
          if (isFF) {
            this.$refs.referalContainer.style.height = `${CC_realHeight + 40}px`
          }
        } else {
          this.CC_overflow = false
          if (isFF) {
            this.$refs.referalContainer.style.height = ``
          }
        }
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
  }
}
</script>

<style>
hr {
  background: none;
}
hr.break {
  width: 100%;
}
.zoomHolder {
  max-width: 300px;
  text-align: center;
  margin: 0 auto;
}
</style>
