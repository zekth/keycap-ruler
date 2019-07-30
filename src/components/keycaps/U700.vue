<template>
  <Keycap size="7U" v-bind:width="width" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  name: 'U700',
  components: { Keycap },
  data: function() {
    return {
      width: 494
    }
  },
  props: ['content']
}
</script>
