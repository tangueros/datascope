---
permalink: /find/cities
llayout:  CustomCities
---

# Cities

<alphalist
:items="items"
keyterm="shortname"
keydef="city"
caption="List of Tango Cities"
/>

<script>
import json from 'Bundle/dist/cities.json'
export default {
  data: function() {
    return {
      items: json
    }
  },
}
</script>
