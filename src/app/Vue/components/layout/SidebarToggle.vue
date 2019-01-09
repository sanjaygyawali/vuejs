<template>
  <button :class="[open ? $style.active : '', $style.button]" @click="handleClick">    
    Click to Toggle
  </button>
</template>
<script>
export default {
  name: 'sidebar-toggle',
  computed: {
    open () {
      return this.$store.state.sidebar.sidebarOpen
    }
  },
  methods: {
    handleClick () {
      this.$store.dispatch('sidebar/toggleSidebar')
    }
  }
}
</script>
<style>

</style>
