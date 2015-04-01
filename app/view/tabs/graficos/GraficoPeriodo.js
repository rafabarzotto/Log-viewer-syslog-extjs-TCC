Ext.define('Log.view.tabs.graficos.GraficoPeriodo', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.graficoperiodo',

    requires: [
        'Log.view.graficos.LogsDiaBar',
        'Log.view.graficos.LogsMesBar',
        'Log.view.graficos.LogsAnoBar',
        'Log.view.toolbar.BarraGraficos'
    ],

    layout: 'card',
    autoShow: true,
    width: '100%',
    height: 600,
    maximized: true,

    items: [{
        xtype: 'logsdiabar'
    }, {
        xtype: 'logsmesbar'
    }, {
        xtype: 'logsanobar'
    }],

    dockedItems: [{
        xtype: 'barragraficos'
    }]


});