<template>
  <li v-bind:class="[isActive ? 'open': '', 'nav-item']">
  <a :style="indent" 
      @click="toggleChildren"
      href="javascript:;">
      <i :class="icon"></i>
      <span class="title" v-text="label"></span>
      <span class="arrow "></span>
  </a>
  <second-menu v-for="menu in menus" :open="isActive" :menus="menu" :key="menu.label"> 
  </second-menu>
  </li>
</template>
<script>
export default {
  props: ['label', 'menus', 'depth', 'open', 'icon'],
  data () {
    return { isActive: false, showChildren: false }
  },
  name: 'dynamic-menu',
  computed: {
    firstelement () {
      if (this.depth === 0) {
        return true
      } else {
        return false
      }
    },
    indent () {
      return {margin: `0px 0px 0px ${this.depth * 30}px`}
    }
  },
  methods: {
    toggleChildren () {
      this.showChildren = !this.showChildren
      this.isActive = !this.isActive
    }
  }
}
</script>
<style scoped>
.li{
    list-style: none;
}
  </style>
