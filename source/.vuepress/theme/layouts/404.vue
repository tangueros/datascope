<template lang="pug">
.theme-container
  .content
    h1 404 BANG BANG
    router-link(to="/") Take me HOMEY!
    blockquote {{ getMsg() }}
    hr
    Content
    hr
    b So much winning

</template>

<script>
const msgs = [
  `There's something here.`,
  `How what where get here?`,
  `Into the Four-Oh-Four.`,
  `Looks broken links.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
