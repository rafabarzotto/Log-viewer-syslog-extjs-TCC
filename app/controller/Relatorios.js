Ext.define('Log.controller.Relatorios', {
	extend: 'Ext.app.Controller',

	requires: ['Ext.ux.IFrame'],

	stores: ['Log.store.combobox.ComboFromHosts',
		'Log.store.combobox.ComboTag',
		'Log.store.logs.Logs',
		'Log.store.logs.LogsCustom'
	],

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
			},

			"janelarelatorios tablogs consultapers formconsulta button#pdf": {
				click: this.onPdf
			},

			"janelarelatorios tablogs grid": {
				celldblclick: this.onClickRow
			}

		})
	},

	onWindowRender: function(consultapers, eOpts) {
		var comboTag = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers combobox#tagcombo')[0];
		var comboHost = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers combobox#fromhostcombo')[0];
		comboHost.getStore().load();
		comboTag.getStore().load();
	},

	onloadGrid: function(button, e, options) {
		var form = button.up('form'),
			values = form.getValues(),
			grid = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers gridlogscustom')[0],
			store = grid.getStore(),
			comboFromHost = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers combobox#fromhostcombo')[0],
			comboFromHostValue = comboFromHost.getValue(),
			comboTag = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers combobox#tagcombo')[0],
			comboTagValue = comboTag.getValue();


		if (values.startDate != "" && values.startTime == undefined) {
			Ext.Msg.alert('Aviso!', 'É necessario preencher todos os campos de data e hora!!');
		} else if (values.endDate != "" && values.endTime == undefined) {
			Ext.Msg.alert('Aviso!', 'É necessario preencher todos os campos de data e hora!!');
		} else if (values.startDate != "" && values.endDate == "") {
			Ext.Msg.alert('Aviso!', 'É necessario preencher todos os campos de data e hora!!');
		} else if (values.startTime == undefined && values.endTime != undefined) {
			Ext.Msg.alert('Aviso!', 'É necessario preencher todos os campos de data e hora!!');
		} else {

			store.loadPage(1, {
				params: {
					tag: comboTagValue,
					host: comboFromHostValue,
					evento: values.evento,
					inicio: values.startDate + " " + values.startTime,
					fim: values.endDate + " " + values.endTime
				}
			});
		}
	},

	onClearForm: function(button, e, options) {
		button.up('form').getForm().reset();
		var grid = Ext.ComponentQuery.query('janelarelatorios tablogs consultapers gridlogscustom')[0],
			store = grid.getStore();
		store.removeAll();

	},

	onClickRow: function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		console.log('Clicou');
		var rec = grid.getStore().getAt(rowIndex);
		window.open('http://www.google.com.br/search?q=' + rec.data.Message, '_blank');

	},

	onPdf: function(button, e, options) {

		var store = Ext.getStore('Log.store.logs.LogsCustom');
		if (store.getTotalCount() > 0) {

			var win = new Ext.Window({
				title: 'PDF',
				iconCls: 'icon-grid',
				modal: true,
				autoShow: true,
				items: [{
					xtype: 'uxiframe',
					width: 600,
					height: 600,
					src: 'php/pdf/geraRelatorio.php'
				}]
			});
		} else {
			Ext.Msg.alert('Aviso!', 'É necessario realizar uma consulta primeiro!');
		}

	},



});