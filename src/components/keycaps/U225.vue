<template>
  <Keycap size="2.25U" name="U225" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  props: ['content']
}
</script>

<style>
.U225{
    width: 153px;
}
</style>
