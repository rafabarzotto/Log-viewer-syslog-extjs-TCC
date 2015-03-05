Ext.define('Log.store.graficos.Dia', {
	extend: 'Ext.data.Store',

	fields: ['Total', 'Dias'],

	//pageSize: 5, // PAGINAGINA MAXIMA

	proxy: {
		type: 'ajax',

		url: 'php/graficos/Dia.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: true

});