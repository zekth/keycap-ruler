<template>
  <Keycap size="2.25U" v-bind:width="width" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  components: { Keycap },
  data: function() {
    return {
      width: 153
    }
  },
  props: ['content']
}
</script>
