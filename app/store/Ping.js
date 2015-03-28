Ext.define('Log.store.Ping', {
	extend: 'Ext.data.Store',

	fields: ['nome', 'ip', 'result'],

   //pageSize: 10, // PAGINAGINA MAXIMA
	
	proxy: {
		type: 'ajax',
		url: 'php/util/ping.php',

		reader: {
			type: 'json',
			root: 'ping'
		}
	},

	autoLoad: true

});