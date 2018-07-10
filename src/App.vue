<template>
  <div id="app">
   <div class="pt">
      <app-header></app-header>
      <b-container class="bv-example-row pt" >
        <app-create-quote @quoteCreated="show = $event.showQuote" ></app-create-quote>
        <!-- <h2 class="mt-3" v-if='show' variant="primary">All Quotes</h2>
        <p  >There are no quotes added yet!</p> -->
        <hr>
        <app-quote-display @quoteCreated = 'show = $event' @quoteRemoved="show = $event" ></app-quote-display>
        <b-alert show class="tred" v-if='!show' style="margin-bottom : 10px;">Click on a quote to delete</b-alert>
        <div class="footer">
          <p>Designed by Kodedly @Kodedly.io</p>
        </div>
      </b-container>
   </div>
  </div>
</template>

<script>
import Header from './components/Header'
import CreateQuote from './components/CreateQuote'
import QuoteDisplay from './components/QuoteDisplay'
import {eventBox} from './main'

export default {
  name: 'app',
  data () {
    return {
      show: true
    }
  },
  components: {
    appHeader: Header,
    appCreateQuote: CreateQuote,
    appQuoteDisplay: QuoteDisplay
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.pt {
  padding-top : 50px;
}

a {
  color: #42b983;
}
.alert-danger {
    margin-bottom: 0;
}
</style>
