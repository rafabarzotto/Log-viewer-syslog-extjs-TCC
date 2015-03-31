Ext.define('Log.store.LogPdf', {
    extend: 'Ext.data.Store',

    model: 'Log.model.Log',

    pageSize: 20, // PAGINAGINA MAXIMA

    proxy: {
        type: 'ajax',
        url: 'php/pdf/exportGridPdf.php',
        reader: {
            type: 'json',
            root: 'logs'
        }
    },

    autoLoad: false

});