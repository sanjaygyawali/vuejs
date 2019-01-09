<template>
<page-content>
    <div slot="dynamicComponent" class="row">
        <div class="col-md-12">
            <portlet-main>
                <i slot="portlet-icon" class="icon-speech"></i>                    
                <span slot="title">Second Page Portlet</span>
                <span slot="subtitle">Portlet Subtitle test2</span>
                <div slot="bodycontent">
                  <ras-vuetable
                    api-url="https://vuetable.ratiw.net/api/users"
                    :fields="fields"
                    :sort-order="sortOrder"
                    :append-params="moreParams"
                    detail-row-component="detail-row">
                  </ras-vuetable>
                </div>
            </portlet-main>
        </div>
    </div>
</page-content>
</template>
<script>
import RasTable from './vuetable.vue'
import FieldDefs from './fields.js'
import DetailRow from './detailrow.vue'
import CustomAction from '../../components/layout/vuetablecommons/Contextdropdown.vue'
import Vue from 'vue'

Vue.component('detail-row', DetailRow)
Vue.component('ras-vuetable', RasTable)
Vue.component('custom-action', CustomAction)

export default {
  components: {
    RasTable
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
      fields: FieldDefs,
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
