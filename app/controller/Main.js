Ext.define('Log.controller.Main', {
	extend: 'Ext.app.Controller',


	// Funcao Renderizar GRID
	init: function(application) {
		this.control({
			"portletpanel": { // Alias GRID!
				render: this.onGridRender
			},

			"barra button#arquivo > menu > menuitem#arqA": {
				click: this.openGerarOrdem
			},

			"barra button#arquivo > menu > menuitem#arqB": {
				click: this.openOrdemGrid
			},

			"barra button#opcoes > menu > menuitem#opA": {
				click: this.openUsersGrid
			},

			"barra button#opcoes > menu > menuitem#opB": {
				click: this.openCancelarOrdem
			},


		})
	},

	onGridRender: function(gridportlet, eOpts) {
		gridportlet = Ext.ComponentQuery.query('portletpanel gridportlet')[0];
		gridportlet.getStore().load();
	},

	openGerarOrdem: function(btn, eOpts) {
		Ext.create('Log.view.janelas.Relatorios');
	},

	openUsersGrid: function(btn, eOpts) {
		Ext.create('Log.view.usuarios.UsersGrid');
	},

	openOrdemGrid: function(btn, eOpts) {
		Ext.create('Log.view.janelas.Graficos');
	},

	openCancelarOrdem: function(btn, eOpts) {

	}


});