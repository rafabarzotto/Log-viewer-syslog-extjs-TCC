Ext.define('Log.view.tabs.graficos.periodo.TabGraficoDia', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tabgraficodia',

    requires: ['Log.view.portlet.ChartPortlet'],



    items: [{
        xtype: 'chartportlet'
    }],

    dockedItems: [{
        xtype: 'barragraficos'
    }]


});