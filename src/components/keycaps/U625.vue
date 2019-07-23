<template>
  <Keycap size="6.25U" v-bind:width="width" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  name: 'U625',
  components: { Keycap },
  data: function() {
    return {
      width: 436
    }
  },
  props: ['content']
}
</script>
