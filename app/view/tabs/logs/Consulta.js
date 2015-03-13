Ext.define('Log.view.tabs.logs.Consulta', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.consultapers',

    views: [],

    requires: ['Log.view.form.FormConsulta'],

    autoShow: true,
    width: '100%',
    height: '100%',
    maximized: true,

    layout: {
        type: 'vbox',
        align: 'center'
    },


    items: [{
        //html: 'ajsdfiuajiosdfjioasdjfio'
        xtype: 'formconsulta'
    }, {
        xtype: 'gridlogs'
    }]

});