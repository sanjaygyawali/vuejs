<template>
    <li>
    <router-link :to='menudetail.route'>
    <i :class="menudetail.icon"></i>
    <span v-text="menudetail.label"></span>
    </router-link>
    </li>
</template>
<script>
export default {
  props: [
    'menudetail'
  ]
}
</script>
<style>

</style>
