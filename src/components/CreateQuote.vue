<template>
  <div>
    <b-form @submit="onSubmit" class="mt-3">
       <b-form-input v-model="author" type="text" required placeholder="Enter your name"></b-form-input>
      <b-form-textarea id="textarea1"
                     v-model="quote"
                     placeholder="Enter a new quote"
                     :rows="12"
                     :max-rows="15"
                     :col="8"
                     class="mt-3"
                     required>
    </b-form-textarea>
      <b-button type="submit" block class="btn-w" style="margin-top: 10px; padding: 10px">Submit</b-button>
    </b-form>

    <b-modal ref="maxQuote" title="Maximum Reached!">
      <p class="my-4">You are allowed a maximum of 10 quotes only!</p>
    </b-modal>
  </div>
</template>

<script>
import {eventBox} from '../main'

export default {
  data () {
    return {
        quotes: [],
        quote: '',
        author: '',
        quoteCount: 0
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      if (this.quoteCount == 10) {
        this.$refs.maxQuote.show() // You can call the show() or hide methods of modal using $ref
        this.quote = '',
        this.author = ''// Update data
        return
      }
      // Date of quote
      let today = new Date()
      let dd = (today.getDate() < 10) ? '0'+today.getDate() : today.getDate()
      let mm = (today.getMonth() < 10) ? '0'+(today.getMonth()+1) : today.getMonth()+1
      let yy = today.getFullYear()
      let quoteDate = dd+'-'+mm+'-'+yy

      // pushes the new quote into the quotes array
      this.quotes.push({quote: this.quote, date: quoteDate, author: this.author})
      this.quoteCount++
      this.quote = '',
      this.author = ''
      // Emit event
      let showQuote = (this.quotes.length > 0)? false : true
      this.$emit('quoteCreated',showQuote)
      eventBox.newQuote({showQuote: showQuote,quotes: this.quotes})
      eventBox.quoteCount(this.quoteCount)
    }
  }
}
</script>
