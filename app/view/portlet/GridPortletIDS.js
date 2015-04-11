Ext.define('Log.view.portlet.GridPortletIDS', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridportletids',

    requires: ['Ext.grid.*'],

    xtype: 'row-expander-grid',

    store: 'Log.store.logs.LogsIDS',

    columns: [{
        text: 'Horario do Evento',
        width: 130,
        dataIndex: 'DeviceReportedTime'
    }, {
        text: 'Host Atacado',
        width: 110,
        dataIndex: 'FromHost'
    }, {
        text: 'Invasor',
        flex: 1, //usa a sobra
        width: 100,
        dataIndex: 'IP'
    },{
            menuDisabled: true,
            xtype: 'actioncolumn',
            width: 25,
            items: [{
                iconCls: 'icon-world',
                tooltip: 'Rastrear IP',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    window.open('http://www.geoiptool.com/?IP=' + rec.data.IP, '_blank');
                }
            }]
        }],
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: new Ext.XTemplate(
            '<p><b>Tentativas de Acesso:</b> {Total}</p>',
            '<p><b>Mensagem:</b> {Message}</p>'
            )
    }],

    height: 300,
    maximized: true,
    renderTo: Ext.getBody()

});