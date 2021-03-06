Ext.define('Log.view.graficos.LogsAnoBar', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.logsanobar',

    requires: ['Ext.chart.series.Column', 'Ext.chart.axis.Category', 'Ext.chart.axis.Numeric'],

    title: 'Eventos por ano',

    style: 'background:#fff',
    animate: true,
    maximized: true,
    insetPadding: 60,
    shadow: true,
    store: 'Log.store.graficos.Ano',
    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['Total'],
        title: 'Eventos',
        grid: true,
        minimum: 0
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['Ano'],
        title: 'Ano',
        label: {
            font: '9px Arial'
        }
    }],
    series: [{
        type: 'column',
        axis: 'left',
        highlight: true,
        tips: {
            trackMouse: true,
            width: 100,
            height: 28,
            renderer: function(storeItem, item) {
                this.setTitle(storeItem.get('Ano') + ': ' + storeItem.get('Total'));
            }
        },
        label: {
            display: 'insideEnd',
            'text-anchor': 'middle',
            field: 'Total',
            orientation: 'vertical',
            color: '#333'
        },
        xField: 'Ano',
        yField: 'Total'
    }]

});