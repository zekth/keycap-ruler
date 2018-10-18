<template>
  <div class="keycap" v-bind:style="computedStyle" v-bind:class="[isVertical?'vertical':'',name]" >
    <span class="keycap-size">{{size}}</span>
    <span class="keycap-content">{{content}}</span>
  </div>
</template>

<script>
const defaultHeight = 68
const defaultWidth = 68
export default {
  props: ['content', 'size', 'width'],
  computed: {
    computedStyle: function() {
      let v = false
      if (window.innerWidth < window.innerHeight && window.innerWidth < 768) {
        v = true
      }
      let w = this.width
      let h = defaultHeight
      if (v) {
        return {
          height: `${w}px`,
          width: `${h}px`
        }
      } else {
        return {
          height: `${h}px`,
          width: `${w}px`
        }
      }
    },
    isVertical: function() {
      if (window.innerWidth < window.innerHeight && window.innerWidth < 768) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="sass">
.keycap {
  background: white;
  display: inline-block;
  border: solid 3px black;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-radius: 7px;
  margin: 0 2px 2px 0;
  &.vertical {
    display:block;
    margin:0 auto;
    margin-bottom:20px;
    .keycap-size {
      float:none;
      text-align:center;
      display:block;
    }
  }
  .keycap-content {
    margin: 0 auto;
  }
  .keycap-size {
    float: right;
    margin: 2px 5px;
  }
}
</style>
