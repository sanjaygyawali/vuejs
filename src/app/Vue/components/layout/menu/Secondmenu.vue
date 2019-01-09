<template>
    <ul class="sub-menu" :class="[ this.open ? 'open': '']">
    <base-menu :key="menus.label" :menudetail="menus"></base-menu>
</ul>
</template>
<script>
export default {
  props: [
    'open', 'menus'
  ]
}
</script>
<style scoped>
.open{
    display:block!important;
}
</style>
