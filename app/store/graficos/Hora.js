Ext.define('Log.store.graficos.Hora', {
	extend: 'Ext.data.Store',

	fields: ['Total', 'Hora'],

	//pageSize: 5, // PAGINAGINA MAXIMA

	proxy: {
		type: 'ajax',

		url: 'php/graficos/Hora.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: true

});