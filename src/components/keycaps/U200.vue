<template>
  <Keycap size="2U" name="U200" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  props: ['content']
}
</script>

<style>
.U200{
    width: 136px;
}
</style>
