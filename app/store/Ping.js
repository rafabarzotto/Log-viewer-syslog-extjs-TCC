Ext.define('Log.store.Ping', {
    extend: 'Ext.data.Store',

    model: 'Log.model.Ping',

    pageSize: 20, // PAGINAGINA MAXIMA

    proxy: {
        type: 'ajax',

        api: {
            create: 'php/ping/criaHost.php',
            read: 'php/ping/listaHost.php',
            update: 'php/ping/atualizaHost.php',
            destroy: 'php/ping/deletaHost.php',
        },

        reader: {
            type: 'json',
            root: 'ping'
        },

        writer: {
            type: 'json',
            root: 'ping',
            encode: 'json'
        }

    },

    autoLoad: false

});