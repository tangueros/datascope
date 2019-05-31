<template lang="pug">
ol
  li(v-for="item in dd")
    b {{item.name}} :
    span {{item.info}}
</template>

<script>
import tri from 'Data/try.yaml'

export  default {
  data() {
    return {
      dd: tri.sdata
    }
  },
  mounted() {
    console.log('I am here ',tri)
  }
}
</script>