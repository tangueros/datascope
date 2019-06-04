<template lang="pug">
div
  i {{caption}}
  ol
    li(v-for="item in items")
      b {{item[`${keyterm}`]}}
      span : {{item[`${keydef}`]}}
</template>

<script>
export  default {
  name: 'alphalist',
  props: [
    'items','keyterm','keydef','caption'
  ],
}
</script>