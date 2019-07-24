<template>
  <Keycap size="2U" v-bind:width="width" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  name: 'U200',
  components: { Keycap },
  data: function() {
    return {
      width: 136
    }
  },
  props: ['content']
}
</script>
