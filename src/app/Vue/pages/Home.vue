<template>
  <div id="app" style="background:white;">
    <div class="page-wrapper ">
      <page-header></page-header>
        <div class="clearfix"></div>
        <div class="page-container">
          <page-sidebar></page-sidebar>
              <!-- BEGIN CONTENT -->
<div class="page-content-wrapper" >
    <div class="page-content" style="min-height:100vh;">
      <page-bar></page-bar>
      <page-title>
        <!-- Page title Comes From menu specified -->
        <!-- User Roles comes from the user store -->
            <span slot="pagetitle" >Page Title</span>
            <span slot="userrole" >User Role</span>
            <!-- Action Group coes from no where -->
           
            <div slot="actiongroup">
                <router-link :to="link" class="btn btn-outline blue">
                <i :class="btnIcon"></i> <span v-text="btnName"></span>
                </router-link>
            </div>
        </page-title>
      <transition name="fade" mode="out-in">
          <router-view></router-view>
      </transition>
              </div>
</div>
<!-- END CONTENT -->
        </div>
        <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    btnName () {
      return this.$store.state.actions.btn1.name
    },
    btnIcon () {
      return this.$store.state.actions.btn1.icon
    },
    link () {
      return this.$store.state.actions.btn1.link
    }
  }
}
</script>

<style lang="scss">
.page-content {
    background: #eef1f5;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.page-content-wrapper{
  background-color: #3d4957;
}

@import url('http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all');
@import "../assets/global/plugins/bootstrap/css/bootstrap.min.css";
@import "../assets/global/plugins/font-awesome/css/font-awesome.min.css";
@import "../assets/global/plugins/simple-line-icons/simple-line-icons.min.css";
@import "../assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css";
//theme style start
@import "../assets/global/css/components.min.css";
@import "../assets/global/css/plugins.css";
@import "../assets/layouts/layout/css/layout.min.css";
@import "../assets/layouts/layout/css/themes/darkblue.min.css";
@import "../assets/layouts/layout/css/custom.css";
</style>
