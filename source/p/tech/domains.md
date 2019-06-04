---
permalink: /tech/domains
llayout:  CustomCities
---

# Domains

<alphalist
:items="items"
keyterm="name"
keydef="domain"
caption='A list of Tango domains'
/>


<script>
import json from 'Bundle/dist/domains.json'
export default {
  data: function() {
    return {
      items: json
    }
  },
}
</script>