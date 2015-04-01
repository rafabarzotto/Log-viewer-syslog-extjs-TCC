Ext.define('Log.view.tabs.TabGraficos', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.tabgraficos',

    views: ['Log.view.tabs.graficos.GraficoHost',
        'Log.view.tabs.graficos.GraficoPeriodo',
        'Log.view.tabs.graficos.GraficoTag'
    ],

    xtype: 'basic-tabs',

    maximized: true,
    height: 720, //720
    width: 1260, //1260
    defaults: {
        bodyPadding: 5,
        autoScroll: true
    },
    items: [{
        title: 'Eventos por Host',
        items: [{
            xtype: 'graficohost',
        }]
    }, {
        title: 'Eventos por período',
        items: [{
            xtype: 'graficoperiodo',
        }]
    }, {
        title: 'Eventos por Tag',
        items: [{
          //  xtype: 'graficotag',
        }]
    }, {
        title: 'Disabled Tab',
        disabled: true
    }]
});