import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['chartLines', 'chartLabels', 'chartData'],
  data () {
    return {
      datacollection: {
        labels: this.chartData.chartLabels,
        datasets: [
          {
            label: 'Registration',
            yAxesID: 'small',
            borderColor: '#D1D400',
            fill: false,
            data: this.chartData.chartLines.registration
          },
          {
            label: 'Payment',
            yAxesID: 'money',
            borderColor: '#6FD459',
            fill: false,
            data: this.chartData.chartLines.payment
          },
          {
            label: 'Visitor',
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
            label: 'Registration',
            borderColor: '#D1D400',
            fill: false,
            data: newChartData.chartLines.registration
          },
          {
            label: 'Payment',
            borderColor: '#6FD459',
            fill: false,
            data: newChartData.chartLines.payment
          },
          {
            label: 'Visitor',
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

