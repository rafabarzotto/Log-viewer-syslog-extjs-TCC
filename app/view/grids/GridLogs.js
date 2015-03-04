Ext.define('Log.view.grids.GridLogs', {
    extend: 'Log.ux.grid.LiveSearchGridPanel',
    alias: 'widget.gridlogs',

    requires: ['Ext.form.field.Date', 'Ext.toolbar.Spacer'],

    store: 'Log.store.Logs',

    columns: [{
            text: 'ID',
            width: 50,
            dataIndex: 'ID'
        },

        {
            text: 'Horario do Evento',
            width: 130,
            dataIndex: 'DeviceReportedTime',
            items: {
                xtype: 'datefield',
                format: 'Y-m-d',
                width: 30,
                //height: 10,
                flex: 1,
                margin: 2,
                enableKeyEvents: true,
                listeners: {
                    keyup: function() {
                        var store = this.up('loggrid').store;
                        store.clearFilter();
                        if (this.value) {
                            store.filter({
                                property: 'DeviceReportedTime',
                                value: this.value,
                                anyMatch: true,
                                caseSensitive: false
                            });
                        }
                    },
                    buffer: 500
                }
            }
        },

        {
            text: 'SysLogTag',
            width: 125,
            dataIndex: 'SysLogTag',
            items: {
                xtype: 'textfield',
                width: 30,
                //height: 10,
                flex: 1,
                margin: 2,
                enableKeyEvents: true,
                listeners: {
                    keyup: function() {
                        var store = this.up('loggrid').store;
                        store.clearFilter();
                        if (this.value) {
                            store.filter({
                                property: 'SysLogTag',
                                value: this.value,
                                anyMatch: true,
                                caseSensitive: false
                            });
                        }
                    },
                    buffer: 500
                }
            }

        },

        {
            text: 'Facility',
            width: 50,
            dataIndex: 'Facility',
            //renderer: change
        },

        {
            text: 'Prioridade',
            width: 60,
            dataIndex: 'Priority',
            renderer: change
        },

        {
            text: 'Host',
            width: 100,
            dataIndex: 'FromHost',
            items: {
                xtype: 'textfield',
                width: 30,
                //height: 10,
                flex: 1,
                margin: 2,
                enableKeyEvents: true,
                listeners: {
                    keyup: function() {
                        var store = this.up('loggrid').store;
                        store.clearFilter();
                        if (this.value) {
                            store.filter({
                                property: 'FromHost',
                                value: this.value,
                                anyMatch: true,
                                caseSensitive: false
                            });
                        }
                    },
                    buffer: 500
                }
            }
        },

        {
            text: 'Evento',
            width: 880,
            dataIndex: 'Message',
            items: {
                xtype: 'textfield',
                width: 30,
                anchor: 50,
                flex: 1,
                margin: 2,
                enableKeyEvents: true,
                listeners: {
                    keyup: function() {
                        var store = this.up('loggrid').store;
                        store.clearFilter();
                        if (this.value) {
                            store.filter({
                                property: 'Message',
                                value: this.value,
                                anyMatch: true,
                                caseSensitive: false
                            });
                        }
                    },
                    buffer: 500
                }
            }
        }
    ],

    height: 590,
    width: 1260,
    maximized: true,
    renderTo: Ext.getBody(),

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Log.store.Logs', // same store GridPanel is using --- EXEMPLO da documentação
        dock: 'bottom',
        displayInfo: true
    }]

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