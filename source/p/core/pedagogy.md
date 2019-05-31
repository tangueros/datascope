---
permalink: /core/pedagogy
ldayout:  CustomCities
---

# Pedagogy


``` js{4}
import tri from 'Data/try.yaml'
var dd = tri.sdata
console.log("Import data is", dd)
```


<ol>
  <li v-for="item in dd">
    <b>{{item.name}}</b> :
  </li>
</ol>

Does this work?


::: tip
Let's find out!
:::

Here you are

***

Here I am



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