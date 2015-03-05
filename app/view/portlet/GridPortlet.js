Ext.define('Log.view.portlet.GridPortlet', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridportlet',

    requires: ['Ext.grid.*'],

    xtype: 'row-expander-grid',

    store: 'Log.store.logs.LogsPortlet',

    columns: [{
        id: 'data',
        text: 'Horario do Evento',
        flex: 1, //usa a sobra
        width: 130,
        dataIndex: 'DeviceReportedTime'
    }, {
        text: 'SysLogTag',
        width: 75,
        dataIndex: 'SysLogTag'
    }, {
        text: 'Host',
        width: 75,
        dataIndex: 'FromHost'
    }, {
        text: 'Prioridade',
        width: 60,
        dataIndex: 'Priority',
        renderer: change
    }],
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl: new Ext.XTemplate(
            '<p><b>Host:</b> {FromHost}</p>',
            '<p><b>Mensagem:</b> {Message}</p>'
            )
    }],

    height: 300,
    maximized: true,
    renderTo: Ext.getBody()

});


//funcao colorir
function change(val) {
    if (val > 3) {
        return '<span style="color:green;">' + val + '</span>';
    } else if (val <= 3) {
        return '<span style="color:red;">' + val + '</span>';
    }
    return val;
}