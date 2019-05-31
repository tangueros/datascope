<template lang="pug">
div
  h1 Extended Layout
  hr
  Content
  hr
  p end of page
</template>

<script>
//import ParentLayout from '@parent-theme/layouts/Layout.vue'
//import Foo from '@theme/components/Foo.vue'

export default {
  components: {
    //ParentLayout,
    //Foo
  },
  //extends: Layout
  //extend: '@vuepress/theme-default',

  mounted() {
    console.log('Inside Extended Layout')
  }
}
</script>
