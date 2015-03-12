Ext.define('Log.view.graficos.LogsDiaBar', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.logsdiabar',

    requires: ['Ext.chart.series.Column', 'Ext.chart.axis.Category', 'Ext.chart.axis.Numeric'],

    title: 'Eventos por dia',
    style: 'background:#fff',
    animate: true,
    maximized: true,
    insetPadding: 60,
    shadow: true,
    store: 'Log.store.graficos.Dia',
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
        fields: ['Dia'],
        title: 'Dia',
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
                this.setTitle(storeItem.get('Dia') + ': ' + storeItem.get('Total'));
            }
        },
        label: {
            display: 'insideEnd',
            'text-anchor': 'middle',
            field: 'Total',
            orientation: 'vertical',
            color: '#333'
        },
        xField: 'Dia',
        yField: 'Total'
    }]

});