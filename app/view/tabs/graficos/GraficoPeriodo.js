Ext.define('Log.view.tabs.graficos.GraficoPeriodo', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.graficoperiodo',

    requires: [
        'Log.view.portlet.ChartPortlet',
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
        xtype: 'chartportlet'
    }, {
        xtype: 'logsmesbar'
    }, {
        xtype: 'logsanobar'
    }],

    dockedItems: [{
        xtype: 'barragraficos'
    }]


});