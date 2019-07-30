<template>
  <Keycap size="6U" v-bind:width="width" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  name: 'U600',
  components: { Keycap },
  data: function() {
    return {
      width: 423
    }
  },
  props: ['content']
}
</script>
