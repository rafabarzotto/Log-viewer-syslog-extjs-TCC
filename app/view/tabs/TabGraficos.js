Ext.define('Log.view.tabs.TabGraficos', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.tabgraficos',

    requires: ['Log.view.tabs.graficos.GraficoHost',
    'Log.view.tabs.graficos.GraficoPeriodo',
    ],

    xtype: 'basic-tabs',

    height: 720, //720
    width: 1260, //1260
    maximized: true,
    defaults: {
        bodyPadding: 5,
        autoScroll: true
    },
    items: [{
        title: 'Eventos por Host',
        items: [{
                xtype: 'graficohost',
            }]
            //html: KitchenSink.DummyText.longText
    }, {
        title: 'Evento por período',
                items: [{
                xtype: 'graficoperiodo',
            }]
        // html: KitchenSink.DummyText.extraLongText
    }, {
        title: 'Disabled Tab',
        disabled: true
    }]
});