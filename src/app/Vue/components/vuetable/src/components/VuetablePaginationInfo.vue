<template>
  <div :class="['vuetable-pagination-info', css.infoClass]"
    v-html="paginationInfo">
  </div>
</template>

<script>
 /* eslint-disable */ 
import PaginationInfoMixin from './VuetablePaginationInfoMixin.vue'

export default {
  mixins: [PaginationInfoMixin],
}
</script>
