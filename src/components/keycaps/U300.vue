<template>
  <Keycap size="3U" name="U300" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  props: ['content']
}
</script>

<style>
.U300{
    width: 204px;
}
</style>
