Ext.define('Log.view.form.FormConsulta', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formconsulta',

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
            margin: '0 5 0 0',
            allowBlank: false
        }, {
            xtype: 'timefield',
            name: 'startTime',
            margin: '0 100 0 0',
            allowBlank: false
        }, {
            xtype: 'datefield',
            name: 'endDate',
            fieldLabel: 'Até a data',
            margin: '0 5 0 0',
            labelWidth: 70,
            allowBlank: false
        }, {
            xtype: 'timefield',
            name: 'endTime',
            margin: '0 5 0 0',
            labelWidth: 30,
            allowBlank: false
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
                xtype: 'textfield'
            }]
        }, {
            xtype: 'fieldcontainer',
            combineErrors: true,
            msgTarget: 'side',
            fieldLabel: 'Prioriedade',
            layout: 'hbox',
            items: [{
                width: 65,
                xtype: 'combo',
                queryMode: 'local',
                value: 'Todos',
                triggerAction: 'all',
                forceSelection: true,
                editable: false,
                name: 'prioriedade',
                displayField: 'name',
                valueField: 'value',
                store: Ext.create('Ext.data.Store', {
                    fields: ['name', 'value'],
                    data: [{
                        name: '1',
                        value: '1'
                    }, {
                        name: '2',
                        value: '2'
                    }, {
                        name: '3',
                        value: '4'
                    }]
                })
            },{
                xtype: 'textfield',
                fieldLabel: 'Host',
                labelWidth: 35,
                margin: '0 0 0 60',
            }
            ]
        }, {
            xtype: 'textfield',
            flex: 1,
            name: 'Evento',
            fieldLabel: 'Evento',
            allowBlank: false
        }]
    }]

});