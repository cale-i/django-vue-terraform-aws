<template>
    <div id="output-field">
        <b-container fluid>

            <b-button @click="reloadTable" variant="danger">reload</b-button>
            <b-table 
                sticky-header
                striped
                hover
                :items="items"
                :fields="fields"
            >
                <template #cell(edit)="row">
                    <b-button size="sm" @click="deleteItem(row.item)">
                        DELETE
                    </b-button>
                </template>
            </b-table>
        </b-container>

   </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [{
                }],
                fields: [
                    {key: 'id', label:'ID',},
                    {key: 'title', label:'Title'},
                    {key: 'price', label:'Price'},
                    {key: 'created_at', label:'date'},
                    {key: 'edit', label:'Edit'},
                    
                ]
            }
        },
        methods: {
            reloadTable() {
                this.$store.dispatch(
                    'item/retlieve'
                )
                .then(response => {
                    this.items = response.results
                })
            },
            deleteItem(item) {
                this.$store.dispatch(
                    'item/delete',
                    {item: item}
                )
                .then(() =>{
                    this.reloadTable()
                }
                )
            }
        },
        created() {
            this.reloadTable()
        }
    }
</script>

<style scoped>

</style>