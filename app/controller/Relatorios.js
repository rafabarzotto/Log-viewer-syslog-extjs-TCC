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
		var form = button.up('form'),
			values = form.getValues(),
			grid = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers gridlogscustom')[0],
			store = grid.getStore(),
			comboFromHost = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers combobox#fromhostcombo')[0],
			comboFromHostValue = comboFromHost.getValue(),
			comboTag = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers combobox#tagcombo')[0],
			comboTagValue = comboTag.getValue();

		store.removeAll();
		store.loadPage(1);

		store.load({
			params: {
				tag: comboTagValue,
				host: comboFromHostValue,
				evento: values.evento,
				inicio: values.startDate + " " + values.startTime,
				fim: values.endDate + " " + values.endTime
			}
		});
	},

	onClearForm: function(button, e, options) {
		button.up('form').getForm().reset();
		var grid = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers gridlogscustom')[0],
			store = grid.getStore();
		store.removeAll();

		var pg = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers gridlogscustom basePagingTbar')[0],
			storePh = pg.getStore();
		storePh.removeAll();
		console.log(storePh);
		storePh.loadPage(1);


	}



});