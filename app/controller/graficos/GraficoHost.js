Ext.define('Log.controller.graficos.GraficoHost', {
    extend: 'Ext.app.Controller',


    views: [
        'tabs.graficos.GraficoHost',
        'graficos.HostsPie',
        'graficos.HostsBar'
      //  'graficos.QtdHostsColumn',
    ],

    stores: [
        'graficos.FromHosts'
    ],

    init: function(application) {
        this.control({
            "janelagraficos tabgraficos graficohost tabpanel": { // Alias GRID!
                render: this.onWindowRender
            },
            "janelagraficos tabgraficos graficohost tabpanel menu#changeType menuitem": {
                click: this.onChangeChart
            },
            "janelagraficos tabgraficos graficohost tabpanel menu#download menuitem": {
                click: this.onChartDownload
            }
        });
    },

    onWindowRender: function(panel, eOpts) {
        var panel = Ext.ComponentQuery.query('janelagraficos tabgraficos graficohost tabpanel > hostspie')[0];
        panel.getStore().load();
    },

    onChangeChart: function(item, e, options) {
        //var panel = item.up('graficos');
        var panel = Ext.ComponentQuery.query('janelagraficos tabgraficos graficohost tabpanel')[0];

        if (item.itemId == 'pie'){
            panel.getLayout().setActiveItem(0);
        } else if (item.itemId == 'column'){
            console.log('deu coluna');
            panel.getLayout().setActiveItem(1);
        } else if (item.itemId == 'bar'){
            panel.getLayout().setActiveItem(2);
        }
    },

    onChartDownload: function(item, e, options) {
        //var chart = item.up('graficos').getLayout().getActiveItem();
        var chart = Ext.ComponentQuery.query('janelagraficos tabgraficos graficohost tabpanel')[0].getLayout().getActiveItem();

        if (item.itemId == 'png'){
            Ext.MessageBox.confirm('Confirmar Download', 'Gostaria de fazer o download do gráfico como imagem?', function(choice){
                if(choice == 'yes'){
                    chart.save({
                        type: 'image/png'
                    });
                }
            });
        } else if (item.itemId == 'svg'){
            Ext.MessageBox.confirm('Confirmar Download', 'Gostaria de fazer o download do gráfico como SVG + XML?', function(choice){
                if(choice == 'yes'){
                    chart.save({
                        type: 'image/svg+xml'
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
