<template>
  <div class="home">
    <h3>{{ food }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  props: {
    food: {
      type: String,
      default: 'banana'
    }
  },
  methods: {
    handleClick () {
      this.$router.replace('/path')
      this.$router.push('/path')
      this.$router.back()
      this.$router.go(1)
    }
  }
}
</script>
