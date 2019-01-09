<template>
  <div id="app" style="background:white;">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    isAuthenticated () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    checkUserToken () {
      window.console.log('Checkigng user token from mounted')
      this.$store.dispatch('checkUserToken')
    },
    checkIfLoggedIn () {
      if (!this.$store.state.auth.isAuthenticated) {
        window.console.log('redirectd to login')
        // this.$router.push({ path: '/login' })
      }
    }
  },
  created: function () {
    window.console.log('I am at the top')
  },
  mounted () {
    this.checkIfLoggedIn()
  }
}
</script>

<style lang="scss">
.page-content {
    background: #eef1f5;
}
.dropdown-enter, .dropdown-leave-to {
  background:white;
  opacity: 0;
}
.dropdown-leave, .dropdown-enter-to {
  background:white;
  opacity: 1;
}
.dropdown-enter-active, .dropdown-leave-active {
  background: white;
  transition: opacity 200ms ease;
}
.dropdown-enter-active {
  transition-delay: 10ms;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 200ms ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


@import url('http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all');
@import "assets/global/plugins/bootstrap/css/bootstrap.min.css";
@import "assets/global/plugins/font-awesome/css/font-awesome.min.css";
@import "assets/global/plugins/simple-line-icons/simple-line-icons.min.css";
@import "assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css";
//theme style start
@import "assets/global/css/components.min.css";
@import "assets/global/css/plugins.css";
@import "assets/layouts/layout/css/layout.min.css";
@import "assets/layouts/layout/css/themes/darkblue.min.css";
@import "assets/layouts/layout/css/custom.css";
@import "assets/pages/css/error.min.css";

//tooltip
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, .1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
