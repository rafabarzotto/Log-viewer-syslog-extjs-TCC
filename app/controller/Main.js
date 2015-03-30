Ext.define('Log.controller.Main', {
	extend: 'Ext.app.Controller',

	stores: ['Log.store.Ping',
		'Log.store.logs.LogsPortlet'
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
		gridportlet.getStore().load();
		gridportletping = Ext.ComponentQuery.query('portletpanel gridportletping')[0];
		gridportletping.getStore().load();
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