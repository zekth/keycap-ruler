<template>
  <div class="keycap-ruler">
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
    <div class="sep" />
  </div>
</template>

<script>
export default {
  name: 'ruler'
}
</script>

<style>
.keycap-ruler {
  font-size: 0;
  border-left: solid 3px black;
}
.sep {
  display: inline-block;
  width: 17.4px;
  height: 35px;
  border-right: solid 3px black;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.sep:nth-child(4n) {
  height: 85px;
}
</style>
