<template>
  <div class="form-group">
    <label class="control-label" v-text="label+ ' :'"></label>
    <input @input="updateSelf($event.target.value)"
          @change="changeEvent"
          :name="name"
          :value="value"
          v-validate="validation"
          type='text'
          :id="id" 
          :class="['form-control', customCss]"
          :placeholder="holder">
    <small  class="text-danger form-text text-muted" 
            id="nameid"
            name="email_1"
            v-text="errors.first(name)">
    </small>
</div>
</template>
<script>
export default {
  inject: ['$validator'],
  props: {
    value: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    holder: {
      type: String,
      required: true,
      default () {
        return ''
      }
    },
    error: {
      type: Object
    },
    validation: {
      type: String,
      required: true,
      default () {
        return ''
      }
    },
    id: {
      type: String
    },
    customCss: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    changeEvent (value) {
      window.console.log('this is change event')
      this.$emit('change')
    },
    updateSelf (value) {
      window.console.log('hello', value)
      this.$emit('input', value)
    },
    errorText (fieldName) {

    }
  }
}
</script>
<style>
</style>

