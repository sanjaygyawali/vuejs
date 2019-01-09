<template> 
    <div>
        <!-- START OF PAGE BAR BREADCUMB -->
        
        <!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
        <div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 class="modal-title">Modal title</h4>
                    </div> 
                    <div class="modal-body">
                        Widget settings form goes here
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn blue">Save changes</button>
                        <button type="button" class="btn default" data-dismiss="modal">Close</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
        <!-- END SAMPLE PORTLET CONFIGURATION MODAL FORM-->
        <!-- BEGIN PAGE HEADER-->
        
        <!-- END PAGE HEADER-->

        <!-- BEGIN PAGE CONTENT-->
        <!-- <div class="note note-info note-bordered">
                            <p> See
                                <a href="ui_colors.html" target="_blank"> Color Library </a> for more colors for portlets. </p>
        </div> -->
        <slot name="dynamicComponent"></slot>
        <!-- END PAGE CONTENT-->
    </div>
</template>
<script>
/* eslint-disable */ 
let menus = [
  {
    label: 'item1',
    menus: [{
      label: 'item1.1',
      menus: [{
        label: 'item1.1.1'
        },
        {
          label: 'item1.1.2'
        }
      ]
    }
    ]
  },
  {
    label: 'item2',
    menus: []
  }
]
export default {
    
  data () {
    return {
      depth: 0,
      menus: menus
    }
  }
}
</script>
<style>
.page-content-white .page-title {
    margin: 28px 0;
    font-size: 24px;
    
}
</style>
