---
permalink: /arts/stages
llayout:  CustomCities
---

# Stages

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
  data() {
    return {
      items: []
    }
  },

  beforeMount() {
    axios.get('https://reqres.in/api/users')
    .then(response => {
       this.$data.items = response.data.data
    })
    .catch(error => {
        console.log(error);
    })
  },
  /*
  async beforeMount() {
    this.$data.items =
    await axios.get('https://reqres.in/api/users')
  }
  */

}
</script>
