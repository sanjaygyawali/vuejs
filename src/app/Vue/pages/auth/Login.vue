<template>
<div>
	<div class="page-header">
    <!-- BEGIN HEADER MENU -->
    <div class="page-header-menu">
        <div class="container" style="width: 100%;padding:0!important">
            <div class="hor-menu" style="width: 100%;">
                <ul class="nav navbar-nav" style="background: #444d58;
		            position: fixed;
		            right: 0;
		            left: 0;
		            z-index: 1030;
		            width: 100%;">
                    <li class="page-logo">
                        <a href="http://rasxp.com/ems" style="padding-top: 8px; padding-bottom: 8px;">
                        	<img src="http://rasxp.com/ems/resources/images/emp/companyLogo20171027064632.png" style="width: 30px;"
                                    alt="rasello">
                        </a>
                    </li>
                </ul>
                <!-- <ul class="nav navbar-nav pull-right">
            </ul> -->
            </div>
            <!-- END MEGA MENU -->
        </div>
    </div>
    <!-- END HEADER MENU -->
</div>
<!-- END SIDEBAR TOGGLER BUTTON -->
<!-- BEGIN LOGIN -->
<div class="content">
    <!-- BEGIN LOGIN FORM -->

    <form @submit.prevent="submitForm" accept-charset="UTF-8" class="login-form" id="sign_in_form"><input name="_token" type="hidden" value="">

    <h3 class="form-title" style="text-align:center;">
        <span style="text-transform:uppercase;">SIGN-IN</span>
        <br>
        <hr>

    </h3>

 

    <div class="form-group">
        <label class="control-label visible-ie8 visible-ie9 hidden">Email </label>
        <div class="input-icon">
            <!-- <i class="fa fa-user"></i> -->
            <input placeholder="Username/Email" v-model="form.username" class="form-control placeholder-no-fix" autocomplete="off" name="email" type="text" value="">
        </div>
    </div>
    <div class="form-group">
        <label class="control-label visible-ie8 visible-ie9 hidden">Password</label>
        <div class="input-icon">
            <!-- <i class="fa fa-lock"></i> -->
            <input placeholder="Password" v-model="form.password" class="form-control placeholder-no-fix" autocomplete="off" name="password" type="password" value="">
        </div>
    </div>
    <div class="form-actions" style="padding-bottom:0; border-bottom:0;">
        <label class="checkbox" style="color:rgb(128, 137, 142) !important; font-weight:400 !important;">
            <input class="" name="remember" type="checkbox" value="value"> Stay logged in </label>
        <button type="submit" class="btn green-haze pull-right" style="background-color:#238f46; border-radius:0 !important; color:white !important;">
            Login <i class="m-icon-swapright m-icon-white"></i>
        </button>
    </div>
    <div class="forget-password">
        <p>
            Forgot password, click <a href="javascript:;" id="forget-password" style="color:#238f46">
                here </a>
            to reset.
        </p>
    </div>
    </form>
</div>


<!-- BEGIN FOOTER -->
<div class="page-footer" style="width: 100%;padding:7px 0;!important">
    <div class="container">
        <ul class="link-list pull-right" style="margin-bottom: 3px;">

            <li><a href="http://rasxp.com/ems" style="font-size:9px; cursor:default">HOME</a></li>

            <li><a href="http://rasxp.com/ems/policy" style="font-size:9px; cursor:default" target="_blank">POLICY</a></li>

            <li><a href="http://rasxp.com/ems/security" style="font-size:9px; " target="_blank" title="Security">
                    <i class="fa fa-lock fa-1x "></i> SECURED</a>
            </li>

            <li>
                <span style="font-size:9px!important;"> &copy; RASELLO 2018</span>
            </li>
        </ul>
    </div>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm () {
      this.$store.dispatch('login', this.form)
        .then(() => {
          this.username = ''
          this.password = ''
          window.console.log('authenticate', this.$store.state.auth.isAuthenticated)
          if (this.$store.state.auth.isAuthenticated) {
            this.$router.push('/')
          }
        })
    },
    nextRoute () {
      // this.$store.dispatch('nextRoute')
      this.$router.push('/')
    }
  }
}
</script>
<style>
    html, body.login {
        background: #fff !important;
        color: #238F46 !important;
    }
    .page-header {
	    opacity: 1;
	    filter: alpha(opacity=100);
	    width: 100%;
	    margin: 0;
	    border: 0;
	    padding: 0;
	    box-shadow: none;
	    height: 126px;
	    background-image: none;
	}
	 .content .form-actions .checkbox {
	    margin-top: 8px;
	    display: inline-block;
	}
	 .content .form-actions .checkbox {
	    margin-left: 0;
	    padding-left: 0;
	}

	    .page-footer {
	        position: absolute;
	        bottom: 0;
	        width: 100%
	    }
	    .form-control {
	    	border-radius: 0px !important;
	    box-shadow: none !important;
	    width: 100%;
	    height: 34px;
	    padding: 6px 12px;
	    background-color: #fff;
	    border: 1px solid #c2cad8;
	    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
	    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
	    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
	}

	    .form-title {
	        font-weight: 100 !important;
	        color: #238F46 !important;
	    }
	    .form-title span{
	    	 font-weight: 0 !important;
	    }

	    div.checker {
	        margin-left: 0;
	    }

	    .btn, .btn:hover {
	        box-shadow: none;
	    }

	    .btn:hover {
	        background-color: #238F46 !important;
	    }

	    .forget-password p {
	        color: rgb(128, 137, 142) !important;
	    }

	    .forget-password {
	        border-bottom: 1px solid #eee;
	    }

	    .page-footer {
	        background: #3b434c;
	        color: #a2abb7;
	    }

	    .page-header .page-header-menu .hor-menu .navbar-nav > li > a:hover {
	        color: #ffffff;
	        background: #55616f !important;
	        
	    }
	    .page-header{
	    	margin-top:0px !important;
	    }
	    .content {
	    background-color: #fff;
	    width: 360px;
	    margin: 0 auto;
	    margin-bottom: 0px;
	    padding: 30px;
	    padding-top: 20px;
	    padding-bottom: 15px;
	    -webkit-border-radius: 7px;
	    -moz-border-radius: 7px;
	    -ms-border-radius: 7px;
	    -o-border-radius: 7px;
	    border-radius: 7px;
	}

    .container a {
        text-decoration: none;
        font-size: 11px;
        color: #FFF;
    }

    .link-list li {
        display: inline-block;
        list-style: none;
        color: #FFF;
    }

    .link-list li a {
        text-decoration: none;
        color: #FFF;
        padding-right: 10px;
    }
    .input-icon>i {
    color: #ccc;
    position: absolute;
    margin: 11px 2px 4px 10px;
    z-index: 3;
    width: 16px;
    font-size: 16px;
    text-align: center;
    left: 0;
}
</style>
