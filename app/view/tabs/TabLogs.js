Ext.define('Log.view.tabs.TabLogs', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.tablogs',

    requires: ['Log.view.tabs.logs.Consulta',
        'Log.view.tabs.logs.ConsultaP'
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
            xtype: 'consulta'
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