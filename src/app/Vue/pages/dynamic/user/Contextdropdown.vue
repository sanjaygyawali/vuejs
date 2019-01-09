<template>
    <div @click.prevent="toggleContextMenu" 
         v-click-outside="onClickOutside" 
         :class="[open ? 'open' : '', 'btn-group', 'pull-right']">
        <a v-tooltip="'Actions'" class="btn btn-default dropdown-toggle" 
            style="border: none !important;"
            aria-expanded="false">
            <i class="fa fa-ellipsis-h"></i>
        </a>
        <transition name="fade"> 
        <ul v-if="open" class="dropdown-menu pull-right dropdown-menu-default">
            <li @click="itemAction('edit-item', rowData, rowIndex)" ><a><i class="icon-note"></i> Edit</a></li> 
            <li @click="itemAction('delete-item', rowData, rowIndex)"><a><i class="icon-trash"></i> Delete</a></li>
        </ul>
        </transition>
    </div>

</template>
<script>
export default {
  name: 'custom-action',
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    onClickOutside () {
      this.open = false
    },
    toggleContextMenu () {
      this.open = !this.open
    },
    itemAction (action, data, index) {
      window.console.log('Custom Action ' + action, data.name, index)
    }
  }
}
</script>
<style scoped>
.dropdown {
    list-style-type: none;
}
</style>
