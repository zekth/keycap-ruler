<template>
  <Keycap size="1U" v-bind:width="width" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  name: 'U100',
  components: { Keycap },
  data: function() {
    return {
      width: 68
    }
  },
  props: ['content']
}
</script>
