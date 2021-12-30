<template>
  <div>
    <br/>
    <br/>
    <br/>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'tel',
  data () {
    return {
      message: 'hi'
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>

<style scoped>

</style>
