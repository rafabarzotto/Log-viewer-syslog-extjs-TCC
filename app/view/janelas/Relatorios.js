Ext.define('Log.view.janelas.Relatorios', {
	extend: 'Ext.window.Window',

	alias: 'widget.janelarelatorios',

	title: 'Relatório Detalhado',

	requires: [
	//'OC.view.grids.GridLogs', 
	//'OC.ux.grid.Printer'
	'Log.view.tabs.TabLogs'
	],

	iconCls: 'icon-grid',

	autoShow: true,
	modal: true,
	maximized: true,
	autoScroll: false,

	closeAction: 'destroy',

	/*layout: {
		type: 'vbox',
		align: 'center'
	},*/

	items: [{
		xtype: 'tablogs',
	}]



});