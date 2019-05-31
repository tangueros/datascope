---
permalink: /core/lexicons
ldayout:  CustomCities
---

# Lexicons

A list of Tango words
***
<words/>

***

<filescan/>


```
<script>
//import gb from 'globby'
//import gb from 'fast-glob'
//const gb = require('fast-glob')

export default {
  mounted() {
    const mypath='words/**/*.md'
    const mycontext='../../bundle/registry-tango-lexicon/'
    console.log('Before scan')

        console.log('Inside Scan')
        let files
        //files = gb.sync(mypath, {cwd: mycontext})
        console.log('Found file ',files)

        console.log('After Scan')
  }

}
</script>
```
