Ext.define('Log.view.tabs.graficos.GraficoPeriodo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.graficoperiodo',

    requires: [
        'Log.view.tabs.graficos.periodo.TabGraficoDia',
        'Log.view.tabs.graficos.periodo.TabGraficoMes',
        'Log.view.tabs.graficos.periodo.TabGraficoAno',
    ],

    layout: 'card',
    autoShow: true,
    width: 700, //100%
    height: 600,
    maximized: true,

    items: [{
        xtype: 'tabpanel',
        items: [{
            xtype: 'tabgraficodia'
        }, {
            xtype: 'tabgraficomes'
        }, {
            xtype: 'tabgraficoano'
        }]

    }]


});