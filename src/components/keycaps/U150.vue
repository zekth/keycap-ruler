<template>
  <Keycap size="1.5U" v-bind:width="width" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  data: function() {
    return {
      width: 102
    }
  },
  props: ['content']
}
</script>
