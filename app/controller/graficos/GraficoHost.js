Ext.define('Log.controller.graficos.GraficoHost', {
    extend: 'Ext.app.Controller',


    views: [
        'tabs.graficos.GraficoHost',
        'graficos.HostsPie',
        'graficos.HostsBar'
    ],

    stores: [
        'graficos.FromHosts'
    ],

    init: function(application) {
        this.control({
            "janelagraficos tabgraficos graficohost": { // Alias GRID!
                render: this.onWindowRender
            },

            "janelagraficos tabgraficos graficohost menu#download menuitem": {
                click: this.onChartDownload
            }
        });
    },

    onWindowRender: function(panel, eOpts) {
        var panel = Ext.ComponentQuery.query('janelagraficos tabgraficos graficohost > hostspie')[0];
        panel.getStore().load();
    },


    onChartDownload: function(item, e, options) {
        //var chart = item.up('graficos').getLayout().getActiveItem();
        var chart = Ext.ComponentQuery.query('janelagraficos tabgraficos graficohost')[0].getLayout().getActiveItem();

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
