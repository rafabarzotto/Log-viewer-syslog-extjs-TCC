Ext.define('Log.view.portlet.ChartPortlet', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.chartportlet',

    requires: ['Ext.chart.series.Column', 'Ext.chart.axis.Category', 'Ext.chart.axis.Numeric'],

    style: 'background:#fff',
    animate: true,
    shadow: true,
    store: 'Log.store.graficos.Hora',
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
        fields: ['Hora'],
        title: 'Hora',
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
                this.setTitle(storeItem.get('Hora') + ': ' + storeItem.get('Total'));
            }
        },
        label: {
            display: 'insideEnd',
            'text-anchor': 'middle',
            field: 'Total',
            orientation: 'vertical',
            color: '#333'
        },
        xField: 'Hora',
        yField: 'Total'
    }],

    height: 300,
    maximized: true,
    renderTo: Ext.getBody()

});