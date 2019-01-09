<template>
    <li class="dropdown dropdown-user">
        <a href="javascript:;" 
            class="dropdown-toggle" 
            data-close-others="true">
            <span class="username username-hide-on-mobile"> Actions</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-default">
            <li>
                <a href="page_user_profile_1.html">
                <i class="icon-user"></i> EVENT 1 </a>
            </li>
            <li>
                <a href="app_calendar.html">
                <i class="icon-calendar"></i> EVENT 2 </a>
            </li>
            <li>
                <a href="app_inbox.html">
                    <i class="icon-envelope-open"></i> EVENT 3
                    <span class="badge badge-danger"> 3 </span>
                </a>
            </li>
        </ul>
    </li>
</template>
<script>
export default {
  name: 'custom-action'
}
</script>
<style>

</style>
