<template lang="pug">
small#VuePressVersioning
  span I have {{counter}} items
  div(v-for="i in items")
    h2 {{i.first_name}} {{i.last_name}}
    img(:src="i.avatar")
</template>

<script>
import axios from 'axios'
//import gb from 'fast-glob'

export default {
  name: "vpversion",
  data() {
    return {
      items: []
    }
  },
  computed: {
    counter() {
      return this.$data.items.length
    }
  },
//  async beforeMount() {
//    this.raw = 'Good'
//  }

//  async beforeMount() {
//    this.$data.items = await axios.get('https://reqres.in/api/users').data
//  }


  beforeMount() {
    axios.get('https://reqres.in/api/users')
    .then( response => {
      this.$data.items = response.data.data
    })
    .catch(error => {
      console.log(error)
    })
  }

}
</script>

