<template>
  <Keycap size="1.75U" v-bind:width="width" name="U175" v-bind:content="content"/>
</template>

<script>
import Keycap from './keycap'
export default {
  name: 'U175',
  components: { Keycap },
  data: function() {
    return {
      width: 120
    }
  },
  props: ['content']
}
</script>
