Ext.define('Log.view.graficos.HostsPie', {
  extend: 'Ext.chart.Chart',

  alias: 'widget.hostspie',

  title: 'Grafico Pizza',
  animate: true,
  maximized: true,
  store: 'Log.store.graficos.FromHosts',
  shadow: true,
  legend: {
    position: 'right'
  },
  insetPadding: 60,
  theme: 'Base:gradients',
  series: [{
    type: 'pie',
    field: 'Total',
    showInLegend: true,
    tips: {
      trackMouse: true,
      width: 140,
      height: 28,
      renderer: function(storeItem, item) {
        this.setTitle(storeItem.get('FromHost') + ': ' + storeItem.get('Total'));
      }
    },
    highlight: {
      segment: {
        margin: 20
      }
    },
    label: {
      field: 'FromHost',
      display: 'rotate',
      contrast: true,
      font: '18px Arial'
    }
  }]


});