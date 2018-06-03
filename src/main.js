// Essential packages
import Vue from 'vue'
import App from './App.vue'

// External Packages
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Event Emitter
export const eventBox = new Vue({
  methods: {
    newQuote(quote){
      this.$emit('quoteCreated',quote)
    },
    quoteCount(theCount){
      this.$emit('quoteAdded',theCount)
    },
    quoteDeleted(quoteRemain){
      this.$emit('quoteRemoved',quoteRemain)
    }
  }
})

// Initiatlize Packages
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
