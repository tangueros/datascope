<template lang="pug">
ol
  li(v-for="item in dd")
    b {{item.name}} :
    span hello!
</template>

<script>
//import gb from 'globby'
//import gb from 'fast-glob'
//const gb = require('fast-glob')
//import tri from 'Data/try.yaml'
//import path from 'path'

//const glob = require('glob')
//import glob from 'glob'


export  default {
  data() {
    return {
      dd: [{name:'one'},{name:'two'}]
    }
  },
  beforeMount() {
    //var Glob=require('glob').Glob

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

