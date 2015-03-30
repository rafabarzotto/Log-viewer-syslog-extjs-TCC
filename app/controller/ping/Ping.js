Ext.define('Log.controller.ping.Ping', {
	extend: 'Ext.app.Controller',

	models: ['Log.model.Ping'],

	stores: ['Log.store.Ping'],

	views: ['Log.view.ping.HostsGrid', 'Log.view.ping.HostsForm'],


	// Funcao Renderizar GRID
	init: function(application) {
		this.control({
			"hostsgrid grid": { // Alias GRID!
				render: this.onWindowRender,
				itemdblclick: this.onEditClick
			},
			"hostsgrid button#add": {
				click: this.onAddClick
			},
			"hostsgrid button#delete": {
				click: this.onDeleteClick
			},
			"hostsform button#cancel": {
				click: this.onCancelClick
			},
			"hostsform button#save": {
				click: this.onSaveClick
			}


		})

	},


	onWindowRender: function(hostsgrid, eOpts) {
		hostsgrid.getStore().load();
	},

	onAddClick: function(btn, eOpts) {
		var win = Ext.create('Log.view.ping.HostsForm');
		win.setTitle('Novo Host');
	},

	onDeleteClick: function(btn, eOpts) {
		var g = btn.up('hostsgrid grid');
		var records = g.getSelectionModel().getSelection();
		console.log(g);
		console.log(records);
		var store = g.getStore();
		console.log(store);
		store.remove(records);
		store.sync();
	},

	onEditClick: function(usersgrid, record, item, index, e, eOpts) {
		var win = Ext.create('Log.view.ping.HostsForm');
		win.setTitle('Editar Host - ' + record.get('nome'));
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
		var grid = Ext.ComponentQuery.query('hostsgrid grid')[0];
		var store = grid.getStore();


		if (record) {
			//console.log('edicao');
			console.log(record);
			record.set(values);
			console.log(record);

		} else {
			//console.log('novo');
			var novohost = Ext.create('Log.model.Ping', {
				nome: values.nome,
			    ip: values.ip
			});

			console.log(novohost);
			store.add(novohost);

		}

		store.sync();
		Ext.Msg.alert('Salvo Com Sucesso!');
	}




});