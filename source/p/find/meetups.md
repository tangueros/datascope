---
permalink: /find/meetups
llayout: Test
---
# Festivals and Meetings


<alphalist
:items="items"
keyterm="Event Name"
keydef="EStartDate"
caption="List of Tango Events"
/>

<script>
import json from 'Bundle/dist/meetups.json'
export default {
  data: function() {
    return {
      items: json
    }
  },
}
</script>
