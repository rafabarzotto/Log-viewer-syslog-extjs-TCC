Ext.define('Log.store.logs.LogsCustom', {
    extend: 'Ext.data.Store',

    model: 'Log.model.Log',

    pageSize: 20, // PAGINAGINA MAXIMA

    proxy: {
        type: 'ajax',
        url: 'php/logs/listaLogsCustom.php',
        reader: {
            type: 'json',
            root: 'logs'
        }
    },

    autoLoad: false

});