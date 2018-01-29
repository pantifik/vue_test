import {Line} from 'vue-chartjs'

export default {
  extends: Line,
  props: ['chartLines', 'chartLabels'],
  data () {
    return {
      datacollection: {
        labels: this.chartLabels,
        datasets: [
          {
            label: 'Registration',
            borderColor: '#D1D400',
            fill: false,
            data: this.chartLines.registration
          },
          {
            label: 'Payment',
            borderColor: '#6FD459',
            fill: false,
            data: this.chartLines.payment
          },
          {
            label: 'Visitor',
            borderColor: '#524ED4',
            fill: false,
            data: this.chartLines.visitor
          },
        ],
 
      },
      
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
  }
}

