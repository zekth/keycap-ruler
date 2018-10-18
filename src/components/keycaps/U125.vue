<template>
  <Keycap size="1.25U" v-bind:width="width" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  data: function() {
    return {
      width: 86
    }
  },
  props: ['content']
}
</script>
