Ext.define('Log.store.graficos.Ano', {
	extend: 'Ext.data.Store',

	fields: ['Total', 'Ano'],

	//pageSize: 5, // PAGINAGINA MAXIMA

	proxy: {
		type: 'ajax',

		url: 'php/graficos/Ano.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: true

});