<template>
   <div>
        <b-card-group deck row wrap class="mt-3 mb-3">
            <b-card border-variant="primary"
                    :header="'Quote By : '+theQuote.author"
                    header-bg-variant="#300743"
                    header-text-variant="white"
                    align="center"
                    :footer="'Date : '+theQuote.date"
                    style="width:100%; max-width: 100%; margin-top: 10px;"
                    v-for="(theQuote,index) in quotes" :key="theQuote.length"
                    @click='deleteQuote(index)'>
                    <p class="card-text">{{theQuote.quote}}</p>
            </b-card>
        </b-card-group>

        <b-modal ref="quotedeleted" title="Quote deleted!" text-variant='danger'>
            <p class="my-4">Quote deleted successsfully! You now have '{{quotes.length}}' remaining</p>
        </b-modal>
    </div>
</template>
<style scoped>
    .card{
        /* // Initial width of the card to be 30% and on flex grow each grow 1 */
        flex-basis: 30%;
        flex-grow: 1;
    }
</style>
<script>
import {eventBox} from '../main'

export default {
    data () {
        return {
            quotes: []
        }
    },
    created () {
        eventBox.$on('quoteCreated',(incoming) => {
            this.quotes = incoming.quotes
        })
    },
    methods: {
        deleteQuote (index) {
           this.$refs.quotedeleted.show()
           this.quotes.splice(index,1)
           let showQuote = (this.quotes.length > 0)? false : true
           this.$emit('quoteRemoved',showQuote)
           eventBox.quoteCount((this.quotes.length))
        }
    }
}
</script>
