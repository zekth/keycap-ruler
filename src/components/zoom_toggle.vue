<template>
  <div class="zoomControl">
    <div style="text-align:center">
      <button class="button is-success" v-on:click="ZoomOut">-</button>
      <button class="button is-success" v-on:click="ZoomIn">+</button>
    </div>
    <div>
      <input ref="zoomSlider" id="zoom" class="slider" type="range" step="1" v-model="zoomValue" min="50" max="250" v-on:input="zoomChange" >
    </div>
    <div>
      <button class="button is-primary is-fullwidth" v-on:click="resetZoom">Reset Zoom</button>
    </div>
  </div>
</template>

<script>
const MAX_ZOOM = 250
const MIN_ZOOM = 50
export default {
  methods: {
    ZoomIn: function(e) {
      let z = parseInt(this.zoomValue) + 1
      if (z > MAX_ZOOM) {
        return
      }
      this.$refs.zoomSlider.value = z
      this.$refs.zoomSlider.dispatchEvent(new Event('input', { bubbles: true }))
    },
    ZoomOut: function(e) {
      let z = parseInt(this.zoomValue) - 1
      if (z < MIN_ZOOM) {
        return
      }
      this.$refs.zoomSlider.value = z
      this.$refs.zoomSlider.dispatchEvent(new Event('input', { bubbles: true }))
    },
    zoomChange: function(event) {
      if (localStorage) {
        localStorage.zoomValue = event.target.value
      }
      this.$emit('updateZoom', event.target.value)
    },
    resetZoom: function(event) {
      this.$refs.zoomSlider.value = 100
      this.$refs.zoomSlider.dispatchEvent(new Event('input', { bubbles: true }))
    }
  },
  mounted() {
    this.$emit('updateZoom', this.zoomValue)
  },
  beforeMount() {
    if (localStorage.zoomValue) {
      this.zoomValue = localStorage.zoomValue
    } else {
      this.zoomValue = document.body.style.zoom
    }
  }
}
</script>

<style>
.zoomControl div{
  margin-bottom: 15px;
  margin: 0 auto;
}
input[type='range'].slider {
  -webkit-appearance: none;
  width: 100%;
  margin: 5.9px 0;
}
input[type='range'].slider:focus {
  outline: none;
}
input[type='range'].slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 40px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #474d4d;
  border-radius: 0px;
  border: 0px solid #010101;
}
input[type='range'].slider::-webkit-slider-thumb {
  box-shadow: 0px 0px 1px #220000, 0px 0px 0px #3c0000;
  border: 0.2px solid rgba(31, 31, 32, 0.16);
  height: 50px;
  width: 40px;
  border-radius: 0px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5.9px;
}
input[type='range'].slider:focus::-webkit-slider-runnable-track {
  background: #5d6565;
}
input[type='range'].slider::-moz-range-track {
  width: 100%;
  height: 40px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #474d4d;
  border-radius: 0px;
  border: 0px solid #010101;
}
input[type='range'].slider::-moz-range-thumb {
  box-shadow: 0px 0px 1px #220000, 0px 0px 0px #3c0000;
  border: 0.2px solid rgba(31, 31, 32, 0.16);
  height: 40px;
  width: 40px;
  border-radius: 0px;
  background: #ffffff;
  cursor: pointer;
}
input[type='range'].slider::-ms-track {
  width: 100%;
  height: 40px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range'].slider::-ms-fill-lower {
  background: #313535;
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type='range'].slider::-ms-fill-upper {
  background: #474d4d;
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type='range'].slider::-ms-thumb {
  box-shadow: 0px 0px 1px #220000, 0px 0px 0px #3c0000;
  border: 0.2px solid rgba(31, 31, 32, 0.16);
  height: 40px;
  width: 40px;
  border-radius: 0px;
  background: #ffffff;
  cursor: pointer;
  height: 40px;
}
input[type='range'].slider:focus::-ms-fill-lower {
  background: #474d4d;
}
input[type='range'].slider:focus::-ms-fill-upper {
  background: #5d6565;
}
</style>
