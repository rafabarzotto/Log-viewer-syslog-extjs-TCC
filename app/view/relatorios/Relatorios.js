Ext.define('Log.view.relatorios.Relatorios', {
	extend: 'Ext.window.Window',

	alias: 'widget.relatorios',

	title: 'Relatório Detalhado',

	requires: [
	//'OC.view.grids.GridLogs', 
	//'OC.ux.grid.Printer'
	'Log.view.tabs.TabLogs'
	],

	iconCls: 'icon-grid',

	autoShow: true,
	modal: true,
	height: 600,
	width: 700,
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