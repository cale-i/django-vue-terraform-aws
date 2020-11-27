import { Line, mixins } from "vue-chartjs"
const { reactiveProp } = mixins

const lineChart = {
    extends: Line,
    mixins: [reactiveProp],
    props: {
        chartdata: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted () {
        this.renderChart(this.chartData, this.options)
    }
}

// import { Bar, mixins } from "vue-chartjs"
// const barChart = {
//       extends: Bar,
//       mixins: [reactiveProp],
//       props: {
//         chartdata: {
//           type: Object,
//           default: null
//         },
//         options: {
//           type: Object,
//           default: null
//         }
//       },
//       mounted () {
//         this.renderChart(this.chartData, this.options)
//       }
//     }


// export default barChart
export default lineChart

// export default {
//     lineChart,
//     barChart,
    
// }
