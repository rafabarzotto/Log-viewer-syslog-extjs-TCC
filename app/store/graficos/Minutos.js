Ext.define('Log.store.graficos.Minutos', {
	extend: 'Ext.data.Store',

	fields: ['Total', 'Dias'],

	//pageSize: 5, // PAGINAGINA MAXIMA

	proxy: {
		type: 'ajax',

		url: 'php/graficos/Minutos.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: true

});