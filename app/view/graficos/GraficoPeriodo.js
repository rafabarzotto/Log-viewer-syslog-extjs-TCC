Ext.define('Log.view.graficos.GraficoPeriodo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.graficoperiodo',

    requires: ['Log.view.portlet.ChartPortlet',
    'Log.view.graficos.LogsMesBar',
    'Log.view.graficos.LogsAnoBar'
    ],

    layout: 'card',
    autoShow: true,
    width: '100%',
    height: 600,
    maximized: true,

    items: [{
        xtype: 'tabpanel',
        items: [{
            title: 'Eventos por dia',
            xtype: 'tabpanel',
            items: [{
                xtype: 'chartportlet'
            }, {
                //    xtype: 'hostsbar'
            }, {
                //  xtype: 'qtdhostsbar'
            }]

        }, {
            title: 'Eventos por mês',
            xtype: 'tabpanel',
            items: [{
                xtype: 'logsmesbar'
            }, {
                //    xtype: 'hostsbar'
            }, {
                //  xtype: 'qtdhostsbar'
            }]
        }, {
            title: 'Eventos por ano',
            xtype: 'tabpanel',
            items: [{
                xtype: 'logsanobar'
            }, {
                //    xtype: 'hostsbar'
            }, {
                //  xtype: 'qtdhostsbar'
            }]
        }],



        dockedItems: [{
            xtype: 'toolbar',
            flex: 1,
            dock: 'top',
            items: [{
                text: 'Change Chart Type',
                iconCls: 'menu_reports',
                menu: {
                    xtype: 'menu',
                    itemId: 'changeType',
                    items: [{
                        xtype: 'menuitem',
                        text: 'Pie',
                        itemId: 'pie',
                        iconCls: 'chart_pie'
                    }, {
                        xtype: 'menuitem',
                        text: 'Column',
                        itemId: 'column',
                        iconCls: 'chart_bar'
                    }, {
                        xtype: 'menuitem',
                        text: 'Bar',
                        itemId: 'bar',
                        iconCls: 'chart_column'
                    }]
                }
            }, {
                text: 'Download Chart',
                iconCls: 'download',
                menu: {
                    xtype: 'menu',
                    itemId: 'download',
                    items: [{
                        xtype: 'menuitem',
                        text: 'Download as Image',
                        itemId: 'png',
                        iconCls: 'image'
                    }, {
                        xtype: 'menuitem',
                        text: 'Download as SVG',
                        itemId: 'svg',
                        iconCls: 'svg'
                    }, {
                        xtype: 'menuitem',
                        text: 'Download as PDF',
                        itemId: 'pdf',
                        iconCls: 'pdf'
                    }]
                }
            }]
        }]


    }]


});