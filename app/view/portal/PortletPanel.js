Ext.define('Log.view.portal.PortletPanel', {
    extend: 'Log.view.app.PortalPanel',

    alias: 'widget.portletpanel',

    requires: ['Log.ux.grid.Printer'],

    getTools: function() {
        return [{
            xtype: 'tool',
            type: 'gear',
            handler: function(e, target, panelHeader, tool) {
                var portlet = panelHeader.ownerCt;
                portlet.setLoading('Loading...');
                Ext.defer(function() {
                    portlet.setLoading(false);
                }, 2000);
            }
        }];
    },

    initComponent: function() {

        Ext.apply(this, {

            items: [{
                id: 'col-1',
                items: [{
                    id: 'portlet-1',
                    title: 'Últimos Eventos',
                    maximizable: true,
                    items: Ext.create('Log.view.portlet.GridPortlet'),
                    tools: [{
                        type: 'print',
                        handler: function() {
                            var grid = Ext.ComponentQuery.query('portletpanel gridportlet')[0];
                            Log.ux.grid.Printer.printAutomatically = false;
                            Log.ux.grid.Printer.print(grid);
                        }
                    }]
                }, {
                    id: 'portlet-2',
                    height: 300,
                    title: 'Portlet 2',
                    html: "Teste HTML, Rafael"
                }]
            }, {
                id: 'col-2',
                items: [{
                    id: 'portlet-3',
                    height: 300,
                    title: 'Monitor de Hosts',
                    items: Ext.create('Log.view.portlet.GridPortletPing')
                }]
            }, {
                id: 'col-3',
                items: [{
                    id: 'portlet-4',
                    title: 'Eventos por Hora',
                    items: Ext.create('Log.view.portlet.ChartPortlet')
                }]
            }]

        });

        this.callParent(arguments);
    }
});