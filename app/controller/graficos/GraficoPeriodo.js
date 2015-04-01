Ext.define('Log.controller.graficos.GraficoPeriodo', {
    extend: 'Ext.app.Controller',


    views: [
        'tabs.graficos.GraficoPeriodo',
        'graficos.LogsMesBar',
        'graficos.LogsAnoBar'
    ],

    init: function(application) {
        this.control({
            "janelagraficos tabgraficos graficoperiodo": { // Alias GRID!
                render: this.onWindowRender
            },
            
            "janelagraficos tabgraficos graficoperiodo menu#download menuitem": {
                click: this.onChartDownload
            }
        });
    },

    onWindowRender: function(panel, eOpts) {
        console.log("redner perido");
        var panel = Ext.ComponentQuery.query('janelagraficos graficos tabgraficos graficoperiodo')[0];
        console.log(panel);
       // panel.getStore().load();
    },


    onChartDownload: function(item, e, options) {
        var chart = Ext.ComponentQuery.query('janelagraficos tabgraficos graficoperiodo')[0].getLayout().getActiveItem();

        if (item.itemId == 'png'){
            Ext.MessageBox.confirm('Confirmar Download', 'Gostaria de fazer o download do gráfico como imagem?', function(choice){
                if(choice == 'yes'){
                    chart.save({
                        type: 'image/png'
                    });
                }
            });
        } else if (item.itemId == 'pdf'){
            Ext.MessageBox.confirm('Confirmar Download', 'Gostaria de fazer o download do gráfico como PDF?', function(choice){
                if(choice == 'yes'){
                    chart.save({
                        type: 'image/png',
                        url: 'php/pdf/exportChartPdf.php'
                    });
                }
            });
        }
    }
});
