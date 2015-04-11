Ext.define('Log.controller.Main', {
	extend: 'Ext.app.Controller',

	stores: ['Log.store.Ping',
		'Log.store.logs.LogsPortlet',
		'Log.store.logs.LogsIDS'
	],

	// Funcao Renderizar GRID
	init: function(application) {
		this.control({
			"portletpanel": { // Alias GRID!
				render: this.onGridRender
			},

			"barra button#arquivo > menu > menuitem#arqA": {
				//click: this.openGerarOrdem
			},

			"barra button#arquivo > menu > menuitem#arqB": {
				//click: this.openOrdemGrid
			},

			"barra button#opcoes > menu > menuitem#opA": {
				click: this.openUsersGrid
			},

			"barra button#opcoes > menu > menuitem#opB": {
				click: this.openHostsGrid
			},

			"barra button#relatorios > menu > menuitem#relA": {
				click: this.openJanelaRelatorios
			},

			"barra button#relatorios > menu > menuitem#relB": {
				click: this.openJanelaGraficos
			}


		})
	},

	onGridRender: function(gridportlet, eOpts) {
		gridportlet = Ext.ComponentQuery.query('portletpanel gridportlet')[0];
		gridportletids = Ext.ComponentQuery.query('portletpanel gridportletids')[0];
		gridportletping = Ext.ComponentQuery.query('portletpanel gridportletping')[0];
		gridportlet.getStore().load();
		gridportletids.getStore().load();
		gridportletping.getStore().load();

		var interval = setInterval(function() {
			//gridportlet.getStore().load();
			//gridportletping.getStore().load();
		}, 50000);
	},

	//Arquivo

	//Relatorios
	openJanelaRelatorios: function(btn, eOpts) {
		Ext.create('Log.view.janelas.Relatorios');
	},


	openJanelaGraficos: function(btn, eOpts) {
		Ext.create('Log.view.janelas.Graficos');
	},

	//Opcoes
	openUsersGrid: function(btn, eOpts) {
		Ext.create('Log.view.usuarios.UsersGrid');
	},

	openHostsGrid: function(btn, eOpts) {
		Ext.create('Log.view.ping.HostsGrid');
	}



});