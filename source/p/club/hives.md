---
permalink: /club/hives
llayout:  CustomCities
---

# Hives

A hive is a dance group in one locale






<script>
//import resolve from '@vuepress/shared-utils'
//import fw from 'filewalker'
import fs from 'fs'
//import path from 'path'

export default {

beforeMount() {
  console.log('OK!')
  var wild = "."
  //const fw=require('filewalker')
/*
  fw(wild)
  .on('dir', function(p) {
    console.log('Dir: ',p)
  })
  .on('file', function(p,s) {
    console.log('File: ',p)
  })
  .on('error', function(err) {
    console.log('Error: ',err)
  })
  .on('done', function() {
    console.log('Finish Walk')
  })
*/

  var arg = '*'
  travDir(arg, true, function(err,res) {
    console.log('Result', res, 'Error', err)
  })


  console.log('DONE!')

}
}

function travDir(startDir, usePath, callback) {
  var parsedDir = []
  fs.readdir(startDir, function(err, dirList) {
      if (usePath) {
        startDir = fs.realpathSync(startDir)
      }
      if (err) {
        return callback(null, parsedDir)
      }
      dirList.forEach( function(file) {
        if (file!='/') {
          file = startDir + '/' + file
        }
        fs.stat(file, function(err, stat) {
          parsedDir.push(file)
          if (stat & stat.isDirectory()) {
            // recurse
            travDir(file, function(err, parsed) {
              parsedDir = parsedDir.concat(parsed)
              if (!--listLength) {
                callback(null, parsedDir)
              }
            })
          } else {
            if (!--listLength) {
              callback(null, parsedDir)
            }
          }
        })
      })
  })

}


/*
//const {
//  fs: { existsSync, mkdirSync },
//  path: { resolve, isAbsolute },
//} = require('@vuepress/shared-utils')
*/
</script>