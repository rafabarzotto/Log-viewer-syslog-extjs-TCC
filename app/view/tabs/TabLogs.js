Ext.define('Log.view.tabs.TabLogs', {
    extend: 'Ext.tab.Panel',

    alias: 'widget.tablogs',

    requires: ['Log.view.grids.GridLogs'],

    xtype: 'basic-tabs',

    height: 720, //720
    width: 1260, //1260
    maximized: true,
    defaults: {
        bodyPadding: 10,
        autoScroll: true
    },
    items: [{
        title: 'Active Tab',
        items: [{
                xtype: 'gridlogs',
                achor: '100%'
            }]
            //html: KitchenSink.DummyText.longText
    }, {
        title: 'Inactive Tab',
        // html: KitchenSink.DummyText.extraLongText
    }, {
        title: 'Disabled Tab',
        disabled: true
    }]
});