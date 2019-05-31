<template lang="pug">
div
  h1 Special
  Content
</template>

<script>
//import ParentLayout from '@parent-theme/layouts/Layout.vue'
/*
GlobalLayout
  Layout
  h2 The LIST
  ul
    li(v-for="i in  items")
      b {{i.name}}
  hr
  Content
  hr
  p the end!

*/
//const cities = '~/bundle/register-tango-cities/cities/asia/'
//import dd from cities+'sin-singapore-singapore.yml'
//import dd from'bundle/register-tango-cities/cities/asia/sin-singapore-singapore.yml'

//import dd from '../try.yml'

const dd = [
  {name: 'Help'},
  {name: 'Some'},
  {name: 'Where'},
]

export default {
  components: {
  //ParentLayout
  },
  data() {
    return {
      items: dd,
    }
  },
  mounted() {
    console.log('Hello see ya', dd)
  }

}
</script>