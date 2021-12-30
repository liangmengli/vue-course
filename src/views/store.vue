<template>
  <div>
    <a-input v-model="inputValue"/>
    <p>{{ inputValue }}</p>
    <a-show :content="inputValue"/>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'

export default {
  name: 'store',
  components: { AInput, AShow },
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<style scoped>

</style>
