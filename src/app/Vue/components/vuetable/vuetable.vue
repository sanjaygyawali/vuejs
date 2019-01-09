<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
import accounting from 'accounting'
import moment from 'moment'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import FilterBar from './Filterbar.vue'
import Vue from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import CssConfig from './VuetableCssConfig.js'

Vue.component('filter-bar', FilterBar)

export default {
  name: 'ras-vuetable',
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
  methods: {
    onLoading () {
      window.console.log('Loading.....')
      NProgress.start()
    },
    onLoaded () {
      window.console.log('Now Loaded//////')
      NProgress.done()
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    allCap: function (value) {
      return value.toUpperCase()
    },
    formatNumber: function (value) {
      return accounting.formatNumber(value, 2)
    },
    formatDate: function (value) {
      return (value == null) ? '' : moment(value, 'YYYY-MM-DD').format('MM/DD/YY')
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="label label-info"><i class="glyphicon glyphicon-star"></i> Male</span>'
        : '<span class="label label-success"><i class="glyphicon glyphicon-heart"></i> Female</span>'
    },
    onCellClicked (data, field, event) {
      window.console.log('cellClicked: ', field.name)
      this.$refs.vuetable.toggleDetailRow(data.id)
    },
    renderVuetable (h) {
      return h(
        'vuetable',
        {
          ref: 'vuetable',
          props: {
            apiUrl: this.apiUrl,
            fields: this.fields,
            paginationPath: '',
            perPage: 10,
            multSort: true,
            sortOrder: this.sortOrder,
            appendParams: this.appendParams,
            detailRowComponent: this.detailRowComponent,
          },
          on: {
            'vuetable:cell-clicked': this.onCellClicked,
            'vuetable:pagination-data': this.onPaginationData,
            'vuetable:loading': this.onLoading,
            'vuetable:loaded': this.onLoaded
          },
          scopedSlots: this.$vnode.data.scopedSlots
        }
      )
    },
    renderPagination (h) {
      return h(
        'div',
        {
          class: {
            'vuetable-pagination': true,
            'ui': true,
            'basis': true,
            'segment': true,
            'grid': true
          }
        },
        [
          h('vuetable-pagination-info', {ref: 'paginationInfo'}),
          h('vuetable-pagination', {
            ref: 'pagination',
            props: { css: this.css.pagination },
            on: {
              'vuetable-pagination:change-page': this.onChangePage
            }
          })
        ]
      )
    }
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    sortOrder: {
      type: Array,
      default () {
        return []
      }
    },
    appendParams: {
      type: Object,
      default () {
        return {}
      }
    },
    detailRowComponent: {
      type: String
    },
    menuOpen: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      open: false,
      css: CssConfig
    }
  },
  render (h) {
    return h(
      'div',
      {
        class: { 'table-responsive': true }
      },
      [
        h('filter-bar'),
        this.renderVuetable(h),
        this.renderPagination(h)
      ]
    )
  }
}
</script>
<style>
</style>
