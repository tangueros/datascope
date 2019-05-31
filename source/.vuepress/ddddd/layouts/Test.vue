<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Take me HOMEY!.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's something here.`,
  `How what where get here?`,
  `To the Four-Oh-Four.`,
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
