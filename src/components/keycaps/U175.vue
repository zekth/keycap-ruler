<template>
  <Keycap size="1.75U" name="U175" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  props: ['content']
}
</script>

<style>
.U175{
    width: 120px;
}
</style>
