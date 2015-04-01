Ext.define('Log.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: ['Ext.tab.Panel',
        'Ext.layout.container.Column',
        'Log.view.app.PortalDropZone',
        'Ext.layout.container.Border'
    ],

    uses: [
        'Log.view.app.PortalPanel',
        'Log.view.app.PortalColumn',
        'Log.view.portal.PortletPanel',
        'Log.view.portlet.GridPortlet',
        'Log.view.portlet.GridPortletPing',
        'Log.view.portlet.ChartPortlet',
        'Log.view.toolbar.Barra'
    ],

    initComponent: function() {

        Ext.apply(this, {
            id: 'app-viewport',
            layout: {
                type: 'border',
                padding: '0 5 5 5'
            },
            items: [{
                id: 'app-header',
                xtype: 'box',
                region: 'north',
                height: 40,
                html: 'SysLog Viewer - TCC - Rafael Barzotto'
            }, {
                xtype: 'container',
                region: 'center',
                layout: 'border',
                items: [{
                    id: 'barra',
                    xtype: 'barra',
                    region: 'north'
                }, {
                    id: 'app-portal',
                    xtype: 'portletpanel',
                    region: 'center',
                }]
            }]
        });
        this.callParent(arguments);
    }
});