Ext.define('Log.view.tabs.logs.Consulta', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.consulta',


    requires: ['Log.view.grids.GridLogs'],

    autoShow: true,
    width: 1250,
    height: '100%',
    maximized: true,

    layout: {
        type: 'vbox',
        align: 'center'
    },


    items: [{
        //html: 'ajsdfiuajiosdfjioasdjfio'
        xtype: 'gridlogs'
    }]

});