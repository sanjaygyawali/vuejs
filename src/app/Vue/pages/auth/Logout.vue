<template>
    <button @click="logout">Logout</button>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(
        this.$router.push('/login')
      )
    }
  }
}
</script>
<style>

</style>
