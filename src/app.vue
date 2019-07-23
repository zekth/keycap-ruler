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
                <hr v-bind:class="{break:!ccOverflow}">
                <div style="overflow-x:hidden" v-bind:class="ccClass">
                  <h3>Referal</h3>
                  <CreditCard ref="CreditCard"/>
                </div>
              </div>
            </div>
          </div>
          <hr v-bind:class="{break:ccOverflow}">
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
      ccOverflow: false
    }
  },
  methods: {
    updateZoom(value) {
      const factor = value / 100
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
      const ccWidth = parseInt(window.getComputedStyle(this.$refs.CreditCard.$el).width)
      const ccHeight = parseInt(window.getComputedStyle(this.$refs.CreditCard.$el).height)
      const ccRealWidth = ccWidth * factor
      const ccRealHeight = ccHeight * factor
      // console.log(navigator.userAgent)
      const isFF = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
      if (window.innerWidth < 768) {
        this.$refs.referalContainer.style.height = ``
      } else {
        if (ccRealWidth > ccWidth) {
          this.ccOverflow = true
          if (isFF) {
            this.$refs.referalContainer.style.height = `${ccRealHeight + 40}px`
          }
        } else {
          this.ccOverflow = false
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
        'is-two-third': this.ccOverflow,
        'is-full': !this.ccOverflow
      }
    },
    zoomClass: function() {
      return {
        column: true,
        'is-one-third': this.ccOverflow,
        'is-full': !this.ccOverflow
      }
    },
    referalContainerClass: function() {
      return {
        column: true,
        'is-one-third': !this.ccOverflow,
        'is-full': this.ccOverflow
      }
    },
    keysClass: function() {
      return {
        column: true,
        'is-two-third': !this.ccOverflow,
        'is-full': this.ccOverflow
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
