<template>
  <Keycap size="1U" name="U100" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  props: ['content']
}
</script>

<style>
.U100 {
  width: 68px;
}
</style>
