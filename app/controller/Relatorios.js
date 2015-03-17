Ext.define('Log.controller.Relatorios', {
	extend: 'Ext.app.Controller',


	// Funcao Renderizar GRID
	init: function(application) {
		this.control({
			"janelarelatorios tablogs consultapers": { // Alias GRID!
				render: this.onWindowRender
			},

			"janelarelatorios tablogs consultapers formconsulta button#buscar": {
				click: this.onloadGrid
			},

			"janelarelatorios tablogs consultapers formconsulta button#limpar": {
				click: this.onClearForm
			}


		})
	},

	onWindowRender: function(consultapers, eOpts) {},

	onloadGrid: function(button, e, options) {
		var form = button.up('form');
		var values = form.getValues();
		var grid = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers gridlogscustom')[0];
		var store = grid.getStore();
		store.load({
			params: {
			//	consulta: "custom",
				tag: values.tag,
			    prioriedade: values.prioriedade,
				host: values.host,
				evento: values.evento
			}
		});
	},

	onClearForm: function(button, e, options) {
		button.up('form').getForm().reset();
	},



});