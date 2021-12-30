<template>
  <div id="app">
    <div id="nav">
      <!--      <router-link to="/">Home</router-link> |-->
      <!--      <router-link to="/about">About</router-link>-->
      <router-link :to="{name:'home'}">Home</router-link>
      ｜
      <router-link :to="{name:'about'}">About</router-link>
    </div>
    <transition-group :name="routerTransition">
      <router-view key="default"/>
      <router-view key="email" class="view email" name="email"/>
      <router-view key="tel" class="view tel" name="tel"/>
    </transition-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routerTransition: ''
    }
  },
  watch: {
    '$route' (to) {
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>
<style lang="less">
.router-enter {
  //页面即将加载
  opacity: 0;
}

.router-enter-active {
  //页面从无到有的效果
  transition: opacity 1s ease;
}

.router-enter-to {
  //完全显示之后
  opacity: 1;
}

.router-leave {
  //页面即将离开
  opacity: 1;
}

.router-leave-active {
  //页面从有到无的效果
  transition: opacity 1s ease;
}

.router-leave-to {
  //完全离开之后
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
