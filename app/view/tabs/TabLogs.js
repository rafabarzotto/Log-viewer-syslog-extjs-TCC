Ext.define('Log.view.tabs.TabLogs', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.tablogs',

    requires: ['Log.view.grids.GridLogs',
        'Log.view.tabs.logs.Consulta'
    ],

   // height: '100%', //720
   // width: '100%', //1260
    maximized: true,
    defaults: {
        bodyPadding: 10,
        autoScroll: true
    },
    items: [{
        title: 'Todos os Eventos',
        items: [{
            xtype: 'gridlogs'
        }]
    }, {
        title: 'Relatório Personalizado',
        items: [{
                xtype: 'consultapers'
            }]
            // html: KitchenSink.DummyText.extraLongText
    }, {
        title: 'Disabled Tab',
        disabled: true
    }]
});