Ext.define('Log.store.logs.LogsIDS', {
    extend: 'Ext.data.Store',

    model: 'Log.model.Log',

    pageSize: 20, // PAGINAGINA MAXIMA

    proxy: {
        type: 'ajax',
        url: 'php/logs/listaLogsIDS.php',
        reader: {
            type: 'json',
            root: 'logs'
        }
    },

    autoLoad: false

});