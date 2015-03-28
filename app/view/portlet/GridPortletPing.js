Ext.define('Log.view.portlet.GridPortletPing', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridportletping',

    store: 'Log.store.Ping',

    columns: [{
        text: 'Host',
        flex: 1, //usa a sobra
        width: 140,
        dataIndex: 'nome'
    }, {
        text: 'IP',
        width: 160,
        dataIndex: 'ip'
    }, {
        text: 'Status',
        menuDisabled: true,
        sortable: false,
        xtype: 'actioncolumn',
        width: 70,
        items: [{
            getClass: function(v, meta, rec) {
                if (rec.get('result') == false) {
                    return 'icon-stop';
                } else {
                    return 'icon-accept';
                }
            }
        }]
    }],
    height: 300,
    maximized: true,
    renderTo: Ext.getBody()

});