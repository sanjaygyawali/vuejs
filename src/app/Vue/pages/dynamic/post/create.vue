<template>
<div>
  <h1>This is Header</h1>
  </div>    
</template>
<script>
export default {
  created () {
    this.changeTopIcon()
  },
  methods: {
    changeTopIcon () {
      this.$store.dispatch('changeToList', { link: '/post/list', pageTitle: 'Post' })
    }
  }
}
</script>
<style>

</style>
