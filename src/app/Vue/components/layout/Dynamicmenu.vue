<template>
  <li :class="{ active : onHover }" class="nav-item"   @mouseover="hoverIn"
  @mouseout="hoverOut">
  <a :style="indent"
  
       
       @click="toggleChildren"
      href="javascript:;">
      <i class="icon-folder"></i>
      <span class="title">{{ label }}</span>
      <span class="arrow "></span>
  </a>
  <dynamic-menu

  v-if="showChildren"
  v-for="(menu,index) in menus"
   :menus="menu.menus" 
   :label="menu.label" 
   :depth="depth+1"
  :key="depth+' '+index"
  > 
  </dynamic-menu>
  </li>
</template>
<script>
export default {
  props: ['label', 'menus', 'depth'],
  data () {
    return { onHover: false, showChildren: false }
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
    },
    hoverIn () {
      this.onHover = true
    },
    hoverOut () {
      this.onHover = false
    }
  }
}
</script>
<style>
.li{
    list-style: none;
}
.hoverClass{
  background-color: white!important;
}
  </style>
