<template>
     <li v-click-outside="onClickOutside" 
     :class="[open ? 'open' : '', 'dropdown', 'dropdown-user']"
      class="dropdown dropdown-user" @click="toggleProfileDropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <img alt="" class="img-circle" src="../../../assets/layouts/layout/img/avatar3_small.jpg"/>
                    <span class="username">
                    Bob </span>
                    <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a href="extra_profile.html">
                            <i class="icon-user"></i> My Profile </a>
                        </li>
                        <li>
                            <a href="page_calendar.html">
                            <i class="icon-calendar"></i> My Calendar </a>
                        </li>
                        <li>
                            <a href="inbox.html">
                            <i class="icon-envelope-open"></i> My Inbox <span class="badge badge-danger">
                            3 </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i class="icon-rocket"></i> My Tasks <span class="badge badge-success">
                            7 </span>
                            </a>
                        </li>
                        <li class="divider">
                        </li>
                        <li>
                            <a @click.prevent="toastr">
                            <i class="icon-lock"></i>Toastr </a>
                        </li>
                        <li>
                            <a @click.prevent="logout" >
                            <i class="icon-key"></i> Log Out </a>
                        </li>
                    </ul>
                </li>
</template>
<script>
export default {
  data () {
    return {
      open: false
    }
  },
  methods: {
    onClickOutside () {
      this.open = false
    },
    toggleProfileDropdown () {
      this.open = !this.open
    },
    logout () {
      window.alert('loggoind out ')
      this.$store.dispatch('logout').then(
        this.$router.push('/login')
      )
    },
    toastr () {
      this.$toastr.s('Success Messages')
    }
  }
}
</script>
<style>

</style>

