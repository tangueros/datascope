---
permalink: /arts/films
llayout:  CustomCities
---

# Films

<alphalist
:items="items"
keyterm="title"
keydef="length"
caption='A list of Tango Films'
/>

<script>
import json from 'Bundle/dist/films.json'
export default {
  data: function() {
    return {
      items: json
    }
  },
}
</script>
