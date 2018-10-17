<template>
  <Keycap size="2.75U" name="U275" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  props: ['content']
}
</script>

<style>
.U275{
    width: 192px;
}
</style>
