<template>
    <div id="chart">
        <b-container>
            <b-button @click="getData()">更新</b-button>
            <chart
                v-if="loaded"
                :chartData="chartdata"
                :options="options"
            ></chart>
        </b-container>
    </div>
</template>

<script>
    import Chart from "@/services/chart.js"
    export default {
        name: 'ChartContainer',
        components: {
            Chart
        },
        data: () => ({
            loaded: false,
            chartdata: null,
            options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
        }),
        methods: {
            getData () {
                const NUM = 10
                this.chartdata = {
                    labels: this.getRandomList(NUM),
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: this.getRandomList(NUM)
                        }, 
                        {
                            label: 'Data Two',
                            backgroundColor: '#2f8888',
                            data: this.getRandomList(NUM)
                        }
                    ]
                }
                // this.options = {
                //     responsive: true,
                //     maintainAspectRatio: false
                // }

            },
            getRandomList (num) {
                let res = []
                for (let i=0; i<num; i++) {
                    res.push(this.getRandomInt())
                }
                return res
            },
            getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        },
        async mounted () {
            this.loaded = false
            try {
                // const { datalist } = await this.$store.dispatch(
                //     'chart/getChart',
                //     {
                //         id: '',
                //     }
                // )
                this.getData()
                    
                // this.chartData = datalist
                this.loaded = true
            } catch (e) {
                console.error(e)
            }
        }
    }
</script>

<style scoped>

</style>