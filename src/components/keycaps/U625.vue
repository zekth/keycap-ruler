<template>
  <Keycap size="6.25U" name="U625" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  props: ['content']
}
</script>

<style>
.U625{
    width: 436px;
}
</style>
