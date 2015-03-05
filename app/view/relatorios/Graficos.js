Ext.define('Log.view.relatorios.Graficos', {
	extend: 'Ext.window.Window',

	alias: 'widget.graficos',

	title: 'Graficos',

	requires: [
	//'OC.view.grids.GridLogs', 
	//'OC.ux.grid.Printer'
	'Log.view.tabs.TabGraficos'
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
		xtype: 'tabgraficos',
	}]



});