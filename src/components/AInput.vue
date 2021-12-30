<template>
  <div>
    <input type="text" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.currentTarget.value)
    }
  }
}
</script>

<style scoped>

</style>
