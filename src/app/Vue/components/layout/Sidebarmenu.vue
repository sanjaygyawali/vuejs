<template>
<li class="tree-menu" >
    <a :style="indent" 
       @click="toggleChildren" 
       href="javascript:;">
        <i class="icon-present"></i>
        <span class="title">{{ label }}</span>
        <span class="arrow "></span>
    </a>
    <tree-menu 
    v-if="showChildren || depth===0"
    v-for="(node, index) in nodes" 
    :nodes="node.nodes" 
    :label="node.label" 
    :key="depth+''+index"
    :depth="depth+1"
    >
    </tree-menu>
</li>
</template>

<script>
export default {
  props: ['label', 'nodes', 'depth'],
  data () {
    return { showChildren: false }
  },
  name: 'tree-menu',
  computed: {
    firstelement () {
      if (this.depth === 0) {
        return true
      } else {
        return false
      }
    },
    indent () {
      return {margin: `0px ${this.depth * 20}px`}
    }
  },
  methods: {
    toggleChildren () {
      this.showChildren = !this.showChildren
    }
  }
}
</script>
<style>
.tree-menu{
    cursor: pointer;
}
li{
   list-style: none;
}
</style>
