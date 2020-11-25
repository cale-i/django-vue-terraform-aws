<template>
    <div id="home-page">
        <GlobalHeader/>
        <InputField/>
        <OutputField/>
        <b-container>
        </b-container>        
    </div>
</template>

<script>
    import GlobalHeader from '@/components/GlobalHeader.vue'
    import InputField from '@/components/InputField.vue'
    import OutputField from '@/components/OutputField.vue'

    // import { mapGetters } from 'vuex'

    export default {
        components: {
            GlobalHeader,
            InputField,
            OutputField
        },
        data: function() {
            return  {
                today: '',
            }
        },
        methods: {
        },

        mounted() {

        },
        created() {

        },
        computed: {

        }
        
    }
</script>

<style scoped>

</style>