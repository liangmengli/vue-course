<template>
  <div>{{name }}</div>
</template>

<script>
export default {
  name: 'argu',
  props: {
    name: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped>

</style>
