<template>
  <div id="app">
   <div>
      <app-header></app-header>
      <b-container class="bv-example-row">
        <app-create-quote @quoteCreated="show = $event.showQuote" ></app-create-quote>
        <h2 class="mt-3" variant="primary">All Quotes</h2>
        <p  v-if='show'>There are no quotes added yet!</p>
        <hr>
        <app-quote-display @quoteCreated = 'show = $event' @quoteRemoved="show = $event" ></app-quote-display>
        <b-alert show variant="danger" v-if='!show'>Click on a quote to delete</b-alert>
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
  margin-top: 10px;
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

a {
  color: #42b983;
}
.alert-danger {
    margin-bottom: 0;
}
</style>
