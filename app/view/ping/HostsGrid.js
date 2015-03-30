Ext.define('Log.view.ping.HostsGrid', {
    extend: 'Ext.window.Window',

    alias: 'widget.hostsgrid',

    iconCls: 'icon-grid',

    autoShow: true,

    modal: true,

    height: 400,
    width: 500,
    title: 'Cadastro de Hosts',

    items: [{

        xtype: 'gridpanel',
        store: 'Log.store.Ping',

        columns: [
            {
                text: 'ID',
                width: 35,
                dataIndex: 'id'
            }, {
                text: 'Nome',
                flex: 1,
                width: 192,
                dataIndex: 'nome'
            },

            {
                text: 'IP',
                width: 250,
                dataIndex: 'ip'
            }
        ],

        dockedItems: [{

                xtype: 'toolbar',
                dock: 'top',
                items: [{
                        xtype: 'button',
                        text: 'Novo',
                        itemId: 'add',
                        iconCls: 'icon-add'
                    },

                    {
                        xtype: 'button',
                        text: 'Exluir',
                        itemId: 'delete',
                        iconCls: 'icon-delete'
                    }

                ]

            }

        ]



    }],

    dockedItems: [

        {
            xtype: 'pagingtoolbar',
            store: 'Log.store.Ping', // same store GridPanel is using --- EXEMPLO da documentação
            dock: 'bottom',
            displayInfo: true
        }

    ]
});