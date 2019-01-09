<template>
<page-content>
    <div slot="dynamicComponent" class="row">
        <div class="col-md-12">
            <portlet-main>
                <i slot="portlet-icon" :class="portletIcon"></i>                    
                <span slot="title" v-text="portletTitle"></span>
                <span slot="subtitle">[ <span v-text="portletContext"></span> ]</span>
                <div slot="bodycontent">
                  <router-view></router-view>
                </div>
            </portlet-main>
        </div>
    </div>
</page-content>
</template>
<script>

export default {
  computed: {
    portletTitle () {
      return this.$store.state.actions.portlet.title
    },
    portletIcon () {
      return this.$store.state.actions.portlet.icon
    },
    portletContext () {
      return this.$store.state.actions.portlet.context
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style>

</style>
