<template>
    <!-- BEGIN SIDEBAR -->
<transition>
<div class="page-sidebar-wrapper ">
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse " >
        <!-- BEGIN SIDEBAR MENU -->
        <ul class="page-sidebar-menu">
            <router-link to='/' tag="li" class="start active ">
                <a href="index.html">
                <i class="icon-home"></i>
                <span class="title">Dashboard</span>
                <span class="selected"></span>
                </a>
            </router-link>
            <first-menu v-for="menu in menus" 
            :icon="menu.icon"
            :label="menu.label" 
            :menus="menu.menus" 
            :key="menu.label">
            </first-menu>
        </ul>
        <!-- END SIDEBAR MENU -->
    </div>

</div>
</transition>
<!-- END SIDEBAR -->
</template>
<script>
/* eslint-disable */ 
let menus = [
  {
    label: 'Items',
    route: '',
    icon: 'icon-folder',
    menus: [{
      label: 'Post',
      route: '/post',
      icon: 'icon-list'
    },
    {
      label: 'User',
      route: '/users',
      icon: 'icon-list'
    },
    {
      label: 'item1.3',
      route: '/users',
      icon: 'icon-plus'
    }]
  },
  {
    label: 'item2',
    icon: 'icon-folder',
    menus: [{
      label: 'item2s.1',
      route: 'icon',
      icon: 'icon-plus'
    }]
  },

]
export default {
  data () {
    return {
      menus: menus
    }
  }
}
</script>
<style>
.page-sidebar-menu li a{
        border-top: 1px solid #3d4957;
    color: #b4bcc8;
        display: block;
    position: relative;
    margin: 0;
    border: 0;
    padding: 10px 15px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;

}
</style>

