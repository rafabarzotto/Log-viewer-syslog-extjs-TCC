Ext.define('Log.store.graficos.Mes', {
	extend: 'Ext.data.Store',

	fields: ['Total', 'Mes'],

	//pageSize: 5, // PAGINAGINA MAXIMA

	proxy: {
		type: 'ajax',

		url: 'php/graficos/Mes.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: true

});