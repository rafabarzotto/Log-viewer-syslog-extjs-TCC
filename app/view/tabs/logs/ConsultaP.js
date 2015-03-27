Ext.define('Log.view.tabs.logs.ConsultaP', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.consultapers',


    requires: ['Log.view.form.FormConsulta',
    'Log.view.grids.GridLogsCustom'],

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
        xtype: 'gridlogscustom'
    }]

});