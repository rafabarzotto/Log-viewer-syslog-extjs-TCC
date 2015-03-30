Ext.Loader.setConfig({
    enabled: true,
    paths: {}
});


Ext.define('Log.Application', {
    name: 'Log',

    extend: 'Ext.app.Application',

    requires: ['Ext.window.Window',
        'Ext.form.Label',
        'Ext.form.Panel'
    ],

    views: [],

    controllers: [
        'Login', 'Main',
        'Log.controller.usuarios.Users',
        'Log.controller.graficos.GraficoHost',
        'Log.controller.graficos.GraficoPeriodo',
        'Log.controller.Relatorios',
        'Log.controller.ping.Ping'
    ],

    stores: [
        'Log.store.graficos.FromHosts',
        'Log.store.graficos.Hora',
        'Log.store.graficos.Dia',
        'Log.store.graficos.Mes',
        'Log.store.graficos.Ano'
    ],


    splashscreen: {},


    autoCreateViewport: false,

    init: function() {

        // Start the mask on the body and get a reference to the mask
        splashscreen = Ext.getBody().mask('Carregando Aplicação', 'splashscreen');

        // Add a new class to this mask as we want it to look different from the default.
        splashscreen.addCls('splashscreen');

        // Insert a new div before the loading icon where we can place our logo.
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });

        //console.log('init');
    },

    launch: function() {

        Ext.tip.QuickTipManager.init();

        var task = new Ext.util.DelayedTask(function() {

            //Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            //Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startTime, eOpts) {
                        Ext.widget('login');
                    }
                }
            });

            // Ext.widget('mainviewport');
            //Ext.widget('login');

            //console.log('launch');
        });

        task.delay(2000);

    }


});