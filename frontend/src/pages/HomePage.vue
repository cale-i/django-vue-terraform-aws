<template>
    <div id="home-page">
        <GlobalHeader/>

        <b-container>
            <b-row>
                <h1>test</h1>
            </b-row>
        </b-container>        
    </div>
</template>

<script>
    import GlobalHeader from '@/components/GlobalHeader.vue'

    import { mapGetters } from 'vuex'

    export default {
        components: {
            GlobalHeader,
        },
        data: function() {
            return  {
                today: '',
            }
        },
        methods: {
        },

        mounted() {
            document.title = 'sample title'
            document.querySelector('meta[name="description"]').setAttribute('content', `${this.today}:`)
        },
        created() {
            const dateTime = new Date
            const year = dateTime.getFullYear()
            const month = ('0'+(dateTime.getMonth() + 1).toString()).slice(-2)
            const day = ('0'+dateTime.getDate().toString()).slice(-2)
            const date = [year, month, day].join('-')
            this.today = date
        },
        computed: {
            ...mapGetters({
            }),
            latestUpdate()  {
                return `最終更新日時 ${this.today} 0:00`
            }

        }
        
    }
</script>

<style scoped>

</style>