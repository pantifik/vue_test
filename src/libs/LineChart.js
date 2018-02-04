import { Line } from 'vue-chartjs'
import Dictionary from './dictionary'

export default {
  extends: Line,
  props: ['chartLines', 'chartLabels', 'chartData'],
  data () {
    return {
      datacollection: {
        labels: this.chartData.chartLabels,
        datasets: [
          {
            label: Dictionary.registration || 'Registration',
            yAxesID: 'small',
            borderColor: '#D1D400',
            fill: false,
            data: this.chartData.chartLines.registration
          },
          {
            label: Dictionary.payment || 'Payment',
            yAxesID: 'money',
            borderColor: '#6FD459',
            fill: false,
            data: this.chartData.chartLines.payment
          },
          {
            label: Dictionary.link_visitor || 'Visitor',
            yAxisID: 'small',
            borderColor: '#524ED4',
            fill: false,
            data: this.chartData.chartLines.visitor
          },
        ],
      },
      options: {
        scales: {
          yAxes: [{
            id: 'money',
            type: 'linear',
            position: 'right',
            scaleLabel: {
              display: true,
              labelString: 'сумма'
            },
            ticks: {
              callback(value) {
                return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
              },
              beginAtZero: true,
            }
          },{
            id: 'small',
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'количество'
            },
            ticks: {
              beginAtZero: true,
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              let formatedData;
              if (item.datasetIndex == 1) {
                formatedData = item.yLabel.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })
              }
              return ` ${data.datasets[item.datasetIndex].label}: ${formatedData || item.yLabel}`
            }
          }
        },
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  },
  methods: {
    getNewColl(newChartData) {
      return this.datacollection = {
        labels: newChartData.chartLabels,
          datasets: [
          {
            label: Dictionary.registration || 'Registration',
            borderColor: '#D1D400',
            fill: false,
            data: newChartData.chartLines.registration
          },
          {
            label: Dictionary.payment || 'Payment',
            borderColor: '#6FD459',
            fill: false,
            data: newChartData.chartLines.payment
          },
          {
            label: Dictionary.link_visitor || 'Visitor',
            borderColor: '#524ED4',
            fill: false,
            data: newChartData.chartLines.visitor
          },
        ],
      }
    }
  },
  watch: {
    chartData: function(newChartData) {
      let chart = this.$data._chart;
      
      this.getNewColl(newChartData);
      chart.destroy();
      this.renderChart(this.datacollection, this.options);
    }
  }
}

