Ext.define('Log.view.graficos.LogsMesBar', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.logsmesbar',

    requires: ['Ext.chart.series.Column', 'Ext.chart.axis.Category', 'Ext.chart.axis.Numeric'],

    style: 'background:#fff',
    animate: true,
    shadow: true,
    store: 'Log.store.graficos.Mes',
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
        fields: ['Mes'],
        title: 'Mês',
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
                this.setTitle(storeItem.get('Mes') + ': ' + storeItem.get('Total'));
            }
        },
        label: {
            display: 'insideEnd',
            'text-anchor': 'middle',
            field: 'Total',
            orientation: 'vertical',
            color: '#333'
        },
        xField: 'Mes',
        yField: 'Total'
    }],

    height: 300,
    maximized: true,
    renderTo: Ext.getBody()

});