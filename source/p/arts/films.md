---
permalink: /arts/films
llayout:  CustomCities
---

# Films

some new words

## Want to know more?

- play a city
- eat a zone

## And then

- drink a donut
- cook a beer

So long!

<div v-for="i in items">
    <h2>{{i.first_name}} {{i.last_name}}</h2>
    <img :src="i.avatar"/>
</div>

<script>
const axios = require('axios')
export default {
  data () {
      return {
          items: []
      }
  },
  async beforeMount() {
    this.$data.items = await axios.get('https://reqres.in/api/users')
  }
}
</script>

