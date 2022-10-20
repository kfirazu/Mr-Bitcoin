<template>
  <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
    :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => { }
    },
    data:{
      type: Array
    },
    labels: {
      type: Array
    }
  },
  data() {
    return {
      chartData: {
        labels: this.labels,
        datasets: [{
          data: this.data,
          backgroundColor: ['#ffffff '],
          label: '1 Bitcoin in USD'
        }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  created() {
    console.log('data from chart cmp:', this.data)
    console.log('labels from chart cmp:', this.labels)

  }
}
</script>