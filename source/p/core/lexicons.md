---
permalink: /core/lexicons
ldayout:  CustomCities
---

# Lexicons

<alphalist
:items="items"
keyterm="term"
keydef="synopsis"
caption='A list of Tango words'
/>


<script>
import json from 'Bundle/dist/lexicons.json'
export default {
  data: function() {
    return {
      items: json
    }
  },
}
</script>
