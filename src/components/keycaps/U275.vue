<template>
  <Keycap size="2.75U" v-bind:width="width" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  name: 'U275',
  components: { Keycap },
  data: function() {
    return {
      width: 192
    }
  },
  props: ['content']
}
</script>
