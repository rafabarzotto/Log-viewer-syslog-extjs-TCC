Ext.define('Log.view.tabs.graficos.periodo.TabGraficoAno', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tabgraficoano',

    requires: ['Log.view.graficos.LogsAnoBar',
        'Log.view.toolbar.BarraGraficos'
    ],

    items: [{
        xtype: 'logsanobar'
    }],

    dockedItems: [{
        xtype: 'barragraficos'
    }]



});