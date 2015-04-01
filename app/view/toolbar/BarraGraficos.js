Ext.define('Log.view.toolbar.BarraGraficos', {
    extend: 'Ext.toolbar.Toolbar',

    alias: 'widget.barragraficos',

    requires: ['Ext.toolbar.Spacer'],

    defaults: { //aplica em todos os itens
        labelAlign: 'left'
    },

    flex: 1,
    dock: 'top',


    items: [{
        text: 'Download',
        iconCls: 'download',
        menu: {
            xtype: 'menu',
            itemId: 'download',
            items: [{
                xtype: 'menuitem',
                text: 'Download JPG',
                itemId: 'png',
                iconCls: 'image'
            }, {
                xtype: 'menuitem',
                text: 'Download PDF',
                itemId: 'pdf',
                iconCls: 'pdf'
            }]
        }
    }]



});