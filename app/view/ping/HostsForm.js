Ext.define('Log.view.ping.HostsForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.hostsform',

	height: 200,
	width: 350,
	modal: true,
	//bodyPadding: 10,
	layout: 'fit',
	iconCls: 'icon-user',
	title: 'Editar/Criar Host',
	autoShow: true,



	items: [{

		xtype: 'form',
		bodyPadding: 10,
		defaults: { //aplica em todos os itens
			anchor: '100%',
			//labelAlign: 'left',
			//mgsTarget: 'side'
		},
		items: [{
			xtype: 'textfield',
			name: 'id',
			fieldLabel: 'ID',
			hidden: true

		}, {
			xtype: 'textfield',
			name: 'nome',
			fieldLabel: 'Nome'

		}, {
			xtype: 'textfield',
			name: 'ip',
			fieldLabel: 'IP'


		}],
	}],

	dockedItems: [{
		xtype: 'toolbar',
		dock: 'bottom',
		layout: {
			type: 'hbox',
			pack: 'end'
		},
		items: [{
				xtype: 'button',
				text: 'Cancelar',
				itemId: 'cancel',
				iconCls: 'icon-reset'
			},

			{
				xtype: 'button',
				text: 'Salvar',
				itemId: 'save',
				iconCls: 'icon-save'
			}


		]
	}],



});