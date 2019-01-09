<template>
<h3 class="page-title uppercase">
    <i class="fa fa-bookmark fa-red"></i>
    <slot name="pagetitle"></slot> [
    <span class="caption-helper uppercase" style="color: rgb(158, 172, 180); font-size: 12px;">
     <slot name="userrole"></slot>
     </span>]
    <div class="btn-group pull-right">
    <slot name="actiongroup"></slot>
    
</div>
</h3>
</template>
<script>
export default {
}
</script>
<style>
.fa-red {
    color: #d0292b !important;
}
.page-content-white .page-title {
    text-transform: uppercase;
    color: #5d9bd1;

    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0 !important;
}
</style>

