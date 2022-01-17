<template>
  <div>
    <a-input v-model="inputValue"/>
    <p>{{ inputValue }}</p>
    <a-show :content="inputValue"/>
    <h4>最后一个字母：{{ inputValueLastLetter }}</h4>
    <h4>appName:&nbsp;{{ appName }} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; appNameWithVersion :&nbsp;{{
        appNameWithVersion
      }}</h4>
    <h4> userName:&nbsp;{{ userName }} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; firstLetter :&nbsp;{{ firstLetter }}</h4>
    <button @click="handleAppName">修改appName的值</button>
    <br/><br/>
    <button @click="handleUserName">修改userName的值</button>
    <br/> <br/>
    <button @click="handleRegisterModule">动态注册模块</button>
    <p v-for="(li,index) in todoList" :key="index">{{ li }}</p>
    <!--    <h4 style='width: 100%;white-space: pre-line;'>{{con}}</h4>-->
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

// const {mapState} = createNamespacedHelpers('user')
export default {
  name: 'store',
  components: { AInput, AShow },
  data () {
    return {
      inputValue: ''
    }
  },
  computed: {
    ...mapState({
      userName: state => state.user.userName,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
    }),
    // firstLetter() {
    //   return this.userName.substr(0, 1) //单组件
    // },
    ...mapGetters([
      'firstLetter',
      'appNameWithVersion'
    ]),
    appName () {
      return this.$store.state.appName
    },
    // appNameWithVersion() {
    //   return this.$store.getters.appNameWithVersion
    // },
    // userName() {
    //   return this.$store.state.user.userName
    // },
    inputValueLastLetter () {
      // return this.inputValue.substr(this.inputValue.length - 1, 1);
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    ...mapMutations(['SET_APP_NAME', 'SET_USER_NAME']),
    ...mapActions(['updateAppName', 'updateUserName']),
    handleAppName () {
      this.updateAppName()
      // this.SET_APP_NAME('newAppName')// 有mapMutations
      // this.$store.commit("SET_APP_NAME", "newAppName") //无mapMutations
    },
    handleUserName () {
      this.$store.dispatch('updateUserName')
      // this.updateUserName()
      // this.SET_USER_NAME('newUserName')// 有mapMutations
      // this.$store.commit("SET_USER_NAME", "newUserName") //无mapMutations
    },
    handleRegisterModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: ['学习1', '学习2']
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
