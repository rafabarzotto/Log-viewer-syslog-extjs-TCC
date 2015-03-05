Ext.define('Log.view.tabs.TabGraficoMes', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tabgraficomes',

    requires: ['Log.view.graficos.LogsMesBar'],

    items: [{
        xtype: 'logsmesbar'
    }],


    dockedItems: [{
        xtype: 'barragraficos'
    }]

});