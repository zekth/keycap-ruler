<template>
  <Keycap size="1.5U" name="U150" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  props: ['content']
}
</script>

<style>
.U150{
    width: 102px;
}
</style>
