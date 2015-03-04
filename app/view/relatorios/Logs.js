Ext.define('Log.view.relatorios.Logs', {
	extend: 'Ext.window.Window',

	alias: 'widget.logs',

	title: 'Relatório Detalhado',

	requires: [
	//'OC.view.grids.GridLogs', 
	//'OC.ux.grid.Printer'
	],

	iconCls: 'icon-grid',

	autoShow: true,
	modal: true,
	height: 600,
	width: 700,
	maximized: true,
	autoScroll: true,

	closeAction: 'destroy',

	layout: {
		type: 'vbox',
		align: 'center'
	},

	items: [{
		//xtype: 'gridordensemitidas'
	}]



});