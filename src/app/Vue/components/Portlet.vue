<template>
<div class="portlet light" style="min-height:70vh">
    <div class="portlet-title" >
        <div class="caption">
            
            <slot name='portlet-icon'></slot>
            <span class="caption-subject bold uppercase">
                <slot name='title'></slot>
            </span>
            <span class="caption-helper">
                <slot name="subtitle"></slot>
            </span>
        </div>
        <div class="actions">
            <slot name='actions'></slot>
        </div>
    </div>
    <div class="portlet-body">
        <slot name="bodycontent"></slot>
    </div>
</div>
</template>
<script>
export default {}
</script>
<style>
</style>

