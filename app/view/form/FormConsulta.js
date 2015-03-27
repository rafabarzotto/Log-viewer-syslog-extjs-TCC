Ext.define('Log.view.form.FormConsulta', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formconsulta',

    requires: ['Ext.form.field.Time', 'Ext.form.FieldSet', 'Ext.form.FieldContainer'],

    autoHeight: true,
    width: '99%', //600
    bodyPadding: 5,
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },
    items: [{
        xtype: 'fieldcontainer',
        fieldLabel: 'A partir da data',
        combineErrors: true,
        //msgTarget: 'side',
        layout: 'hbox',
        items: [{
            xtype: 'datefield',
            name: 'startDate',
            submitFormat: 'Y-m-d',
            margin: '0 5 0 0',
            value: '',
            maxValue: new Date()
        }, {
            xtype: 'timefield',
            name: 'startTime',
            margin: '0 100 0 0',
            format: 'H:i'
        }, {
            xtype: 'datefield',
            name: 'endDate',
            fieldLabel: 'Até a data',
            submitFormat: 'Y-m-d',
            margin: '0 5 0 0',
            labelWidth: 70,
            value: '',
            maxValue: new Date()
        }, {
            xtype: 'timefield',
            name: 'endTime',
            margin: '0 5 0 0',
            labelWidth: 30,
            format: 'H:i'
        }]
    }, {
        xtype: 'fieldset',
        title: 'Opções Avançadas',
        collapsible: true,
        defaults: {
            labelWidth: 89,
            anchor: '100%',
            layout: {
                type: 'hbox',
                defaultMargins: {
                    top: 0,
                    right: 5,
                    bottom: 0,
                    left: 0
                }
            }
        },
        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Tag',
            combineErrors: true,
            msgTarget: 'under',
            items: [{
                xtype: 'combobox',
                emptyText: 'Todas as Tags',
                store: 'Log.store.combobox.ComboTag',
                queryMode: 'local',
                id: 'tagcombo',
                displayField: 'SysLogTag',
                valueField: 'SysLogTag',
                editable: false,
                labelWidth: 35,
                margin: '0 60 0 0'
            }, {
                xtype: 'combobox',
                fieldLabel: 'Host',
                emptyText: 'Todos os Hosts',
                store: 'Log.store.combobox.ComboFromHosts',
                queryMode: 'local',
                id: 'fromhostcombo',
                displayField: 'FromHost',
                valueField: 'FromHost',
                editable: false,
                labelWidth: 35,
                margin: '0 60 0 0'
            }, {
                xtype: 'textfield',
                name: 'evento',
                fieldLabel: 'Evento',
                labelWidth: 40,

            }]
        }]
    }],

    buttons: [{
        text: 'Buscar',
        itemId: 'buscar'
    }, {
        text: 'Limpar',
        itemId: 'limpar'

    }]

});