Ext.define('Log.view.tabs.graficos.GraficoHost', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.graficohost',

    requires: ['Log.view.graficos.HostsPie',
        'Log.view.graficos.HostsBar'
    ],

    layout: 'card',
    autoShow: true,
    width: '100%',
    height: 600,
    maximized: true,

    items: [{
        xtype: 'tabpanel',
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

    }]


});