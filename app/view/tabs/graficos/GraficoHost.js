Ext.define('Log.view.tabs.graficos.GraficoHost', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.graficohost',

    views: ['Log.view.graficos.HostsPie',
        'Log.view.graficos.HostsBar'
    ],

    requires: ['Log.view.toolbar.BarraGraficos'],

    layout: 'card',
    autoShow: true,
    width: '100%',
    height: 600,
    maximized: true,

        items: [{
            xtype: 'hostspie'
        }, {
            xtype: 'hostsbar'
        }, {
            //  xtype: 'qtdhostsbar'
        }],

        dockedItems: [{
            xtype: 'barragraficos'
        }]


});