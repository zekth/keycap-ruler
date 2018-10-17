<template>
  <Keycap size="1.25U" name="U125" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  props: ['content']
}
</script>

<style>
.U125 {
  width: 86px;
}
</style>
