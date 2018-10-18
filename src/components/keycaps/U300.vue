<template>
  <Keycap size="3U" v-bind:width="width" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  data: function() {
    return {
      width: 204
    }
  },
  props: ['content']
}
</script>
