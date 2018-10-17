<template>
  <div class="keycap" v-bind:class="[name]" >
    <span class="keycap-size">{{size}}</span>
    <span class="keycap-content">{{content}}</span>
  </div>
</template>

<script>
export default {
  props: ['content', 'size', 'name']
}
</script>

<style>
.keycap-content {
  margin: 0 auto;
}
.keycap-size {
  float: right;
  margin: 2px 5px;
}
.keycap {
  background: white;
  display: inline-block;
  border: solid 3px black;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-radius: 7px;
  margin: 0 2px 2px 0;
  height: 68px;
}
</style>
