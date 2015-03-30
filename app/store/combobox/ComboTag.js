Ext.define('Log.store.combobox.ComboTag', {
	extend: 'Ext.data.Store',

	fields: ['SysLogTag'],

   //pageSize: 10, // PAGINAGINA MAXIMA
	
	proxy: {
		type: 'ajax',
		url: 'php/combobox/listaSysLogTag.php',

		reader: {
			type: 'json',
			root: 'data'
		}
	},

	autoLoad: false

});