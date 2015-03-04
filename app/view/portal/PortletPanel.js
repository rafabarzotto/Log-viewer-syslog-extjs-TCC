Ext.define('Log.view.portal.PortletPanel', {
    extend: 'Log.view.app.PortalPanel',    
    
    alias: 'widget.portletpanel',

    getTools: function(){
        return [{
            xtype: 'tool',
            type: 'gear',
            handler: function(e, target, panelHeader, tool){
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
                    tools: this.getTools(),
                    items: Ext.create('Log.view.portlet.GridPortlet')
                },{
                    id: 'portlet-2',
                    height: 300,
                    title: 'Portlet 2',
                    tools: this.getTools(),
                    html: "Teste HTML, Rafael"
                }]
            },{
                id: 'col-2',
                items: [{
                    id: 'portlet-3',
                    height: 300,
                    title: 'Portlet 3',
                    tools: this.getTools(),
                    html: "Teste ejaiuehuae"
                }]
            },{
                id: 'col-3',
                items: [{
                    id: 'portlet-4',
                    title: 'Eventos por Dia',
                    tools: this.getTools(),
                    items: Ext.create('Log.view.portlet.ChartPortlet')
                }]
            }]
            
        });
                
        this.callParent(arguments);
    }
});
