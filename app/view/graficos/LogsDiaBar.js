Ext.define('Log.view.graficos.LogsDiaBar', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.logsdiabar',

    title: 'Eventos por dia',
    animate: true,
    style: 'background:#fff',
    shadow: false,
    store: 'Log.store.graficos.Dia',
    axes: [{
        type: 'Numeric',
        position: 'bottom',
        fields: ['Total'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0,0')
        },
        title: 'Número de Eventos',
        minimum: 0
    }, {
        type: 'Category',
        position: 'left',
        fields: ['Dia'],
        title: 'Dia'
    }],
    series: [{
        type: 'bar',
        axis: 'bottom',
        tips: {
            trackMouse: true,
            width: 200,
            height: 28,
            renderer: function(storeItem, item) {
                this.setTitle(storeItem.get('Dia') + ': ' + storeItem.get('Total'));
            }
        },
        label: {
            display: 'insideEnd',
            field: 'Total',
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'horizontal',
            color: '#333',
            'text-anchor': 'middle',
            contrast: true
        },
        xField: 'Dia',
        yField: ['Total'],
        //color renderer
        renderer: function(sprite, record, attr, index, store) {
            var fieldValue = Math.random() * 20 + 10;
            var value = (record.get('Total') >> 0) % 5;
            var color = ['rgb(213, 70, 121)',
                'rgb(44, 153, 201)',
                'rgb(146, 6, 157)',
                'rgb(49, 149, 0)',
                'rgb(249, 153, 0)'
            ][value];
            return Ext.apply(attr, {
                fill: color
            });
        }
    }]
});