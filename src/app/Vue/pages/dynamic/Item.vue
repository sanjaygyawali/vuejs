<template>
<page-content>
    <div slot="dynamicComponent" class="row">
        <div class="col-md-12">
            <portlet-main>
                <i slot="portlet-icon" :class="portletIcon"></i>                    
                <span v-tooltip="'This is Portlet Title'" v-text="portletTitle" slot="title">Portlet Title</span>
                <span slot="subtitle" v-text="portletContext">subtitle test</span>
            </portlet-main>
        </div>
    </div>
</page-content>

</template>
<script>
export default {

}
</script>
<style>

</style>
