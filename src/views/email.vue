<template>
  <div>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
export default {
  name: 'email',
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  }
}
</script>

<style scoped>

</style>
