<template>
  <div>
    <h2>U-quote</h2>
    <b-progress :value="counter" :max="max" show-progress animated></b-progress>
  </div>
</template>

<script>
import {eventBox} from '../main'

export default {
  data () {
    return {
      counter: 0,
      max: 10,
    }
  },
  created(){
    eventBox.$on('quoteAdded', (quoteCount) => {
      this.counter = quoteCount
    })
    eventBox.$on('quoteRemoved', (quoteCount) => {
      this.counter = quoteCount
    })
    
  }
}
</script>
