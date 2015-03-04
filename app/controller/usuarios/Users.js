Ext.define('Log.controller.usuarios.Users', {
	extend: 'Ext.app.Controller',

	models: ['Log.model.User'],

	stores: ['Log.store.Usuarios'],

	views: ['Log.view.usuarios.UsersGrid', 'Log.view.usuarios.UsersForm'],

	requires: ['Log.util.MD5'],



	// Funcao Renderizar GRID
	init: function(application) {
		this.control({
			"usersgrid grid": { // Alias GRID!
				render: this.onWindowRender,
				itemdblclick: this.onEditClick
			},
			"usersgrid button#add": {
				click: this.onAddClick
			},
			"usersgrid button#delete": {
				click: this.onDeleteClick
			},
			"usersform button#cancel": {
				click: this.onCancelClick
			},
			"usersform button#save": {
				click: this.onSaveClick
			}


		})

	},


	onWindowRender: function(usersgrid, eOpts) {
		usersgrid.getStore().load();
	},

	onAddClick: function(btn, eOpts) {
		console.log('Clicou aqui');
		var win = Ext.create('Log.view.usuarios.UsersForm');
		win.setTitle('Novo Usuário');
	},

	onDeleteClick: function(btn, eOpts) {
		var g = btn.up('usersgrid grid');
		var records = g.getSelectionModel().getSelection();
		console.log(g);
		console.log(records);
		var store = g.getStore();
		console.log(store);
		store.remove(records);
		store.sync();
	},

	onEditClick: function(usersgrid, record, item, index, e, eOpts) {
		console.log('testse');
		var win = Ext.create('Log.view.usuarios.UsersForm');
		win.setTitle('Editar Usuário - ' + record.get('nome'));
		var form = win.down('form');
		form.loadRecord(record);
	},

	onCancelClick: function(btn, e, eOpts) {
		var win = btn.up('window'); //pegar window
		var form = win.down('form'); //pegar o form dentro da window
		form.getForm().reset(); //resetar o form
		win.close();
	},

	onSaveClick: function(btn, e, eOpts) {
		var win = btn.up('window'); //pegar window
		
		var form = win.down('form');

		var values = form.getValues();

		var record = form.getRecord();

		var grid = Ext.ComponentQuery.query('usersgrid grid')[0];

		var store = grid.getStore();


		if (record) {
			//console.log('edicao');
			console.log(record);
			record.set(values);
			console.log(record);

		} else {
			//console.log('novo');
			var novousuario = Ext.create('Log.model.User', {
				nome: values.nome,
			    senha: Log.util.MD5.encode(values.senha),
				//senha: values.senha,
				email: values.email
			});

			console.log(novousuario);
			store.add(novousuario);

		}

		store.sync();
		Ext.Msg.alert('Salvo Com Sucesso!');
	}




});