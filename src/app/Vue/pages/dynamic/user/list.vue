<template>
    <custom-vuetable
    api-url="http://127.0.0.1:8000/api/v1/mobile/users"
    :fields="formfields"
    :sort-order="sortOrder"
    :append-params="moreParams"
    detail-row-component="detail-row">
  </custom-vuetable>
</template>
<script>
import RasTable from '../customvuetable.vue'
import FieldDefs from './fields.js'
import DetailRow from './detailrow.vue'
import CustomAction from './Contextdropdown.vue'
import Vue from 'vue'

Vue.component('detail-row', DetailRow)
Vue.component('custom-vuetable', RasTable)
Vue.component('custom-action', CustomAction)

export default {
  components: {
    RasTable
  },
  created () {
    this.$store.dispatch('changeToAdd', { link: '/users/create', pageTitle: 'Users' })
  },
  methods: {
    event1 (action, data, index) {
      console.log('slot action,' + action + data.name, index)
    },
    onClickOutside () {
      this.open = false
    },
    toggleContextMenu () {
      window.console.log('Context before clicked', this.open)
      this.open = !this.open
      window.console.log('Context after clicked', this.open)
    },
    itemAction (action, data, index) {
      window.console.log('Custom Action ' + action, data.name, index)
    }
  },
  data () {
    return {
      open: true,
      formfields: FieldDefs,
      sortOrder: [
        {
          field: 'email',
          sortField: 'email',
          direction: 'asc'
        }
      ],
      moreParams: {}
    }
  }
}
</script>
<style>

</style>
