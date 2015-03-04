Ext.define('Log.view.usuarios.UsersForm', {
	extend: 'Ext.window.Window',
	alias: 'widget.usersform',

	height: 200,
	width: 350,
	modal: true,
	//bodyPadding: 10,
	layout: 'fit',
	iconCls: 'icon-user',
	title: 'Editar/Criar Usuario',
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
			name: 'iduser',
			fieldLabel: 'ID',
			hidden: true

		}, {
			xtype: 'textfield',
			name: 'nome',
			fieldLabel: 'Nome'

		}, {
			xtype: 'textfield',
			inputType: 'password',
			name: 'senha',
			fieldLabel: 'Senha'


		}, {
			xtype: 'textfield',
			name: 'email',
			fieldLabel: 'E-Mail'

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