Ext.define('Log.view.toolbar.Barra', {
    extend: 'Ext.toolbar.Toolbar',

    alias: 'widget.barra',

    requires: ['Ext.toolbar.Spacer'],

    defaults: { //aplica em todos os itens
        labelAlign: 'left'
    },

    items: [{
            text: 'Arquivo',
            arrowAlign: 'right',
            iconCls: 'icon-folder',
            itemId: 'arquivo',
            menu: [{
                text: 'Gerar Ordem de Compra',
                id: 'arqA',
                iconCls: 'icon-date'
            }, {
                text: 'Ordens Emitidas',
                id: 'arqB',
                iconCls: 'icon-folder'
            }, {
                text: 'Item 3'
            }, '-', {
                text: 'Logout',
                id: 'logout',
                iconCls: 'icon-stop',
            }]
        },

        {
            xtype: 'tbspacer',
            width: 3
        },

        {
            text: 'Relatórios',
            arrowAlign: 'right',
            iconCls: 'icon-report',
            id: 'relatorios',
            menu: [{
                text: 'Relatórios Completos',
                id: 'relA',
                iconCls: 'icon-date'
            }, '-', {
                text: 'Graficos',
                id: 'relB',
                iconCls: 'icon-chart'
            }, {
                text: 'Item 4'
            }]
        },

        {
            xtype: 'tbspacer',
            width: 3
        },

        {
            text: 'Opções',
            arrowAlign: 'right',
            iconCls: 'icon-wrench',
            itemId: 'opcoes',
            menu: [{
                text: 'Abrir Cadastro de User',
                id: 'opA',
                iconCls: 'icon-user-add'
            }, {
                text: 'Cancelar Ordem',
                id: 'opB',
                iconCls: 'icon-cancel'
            }, {
                text: 'Item 3'
            }, {
                text: 'Item 4'
            }]
        },

        {
            xtype: 'tbspacer',
            width: 3
        },

        {
            text: 'Ajuda',
            arrowAlign: 'right',
            iconCls: 'icon-help',
            itemId: 'sobre',
            menu: [{
                text: 'Sobre',
            }, {
                text: 'Item 2',
            }, {
                text: 'Item 3'
            }, {
                text: 'Item 4'
            }]
        }

    ]

});