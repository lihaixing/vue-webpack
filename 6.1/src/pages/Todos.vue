<template>
  <div class="todo">
    <router-link to="/">home</router-link>
    <router-link to="/todo">todos</router-link>
    <h1>this is todos</h1>
    <input type="text" v-model="newtodo.text" @keydown.13="createTodo">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.text}}
        <span @click="delTodo(todo)">删除</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions } from 'vuex'

export default {
  name: '',
  data: () => {
    return {
      newtodo: {
        text: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'todos'
    ])
  },
  methods: {
    ...mapActions([
      'addTodo',
      'delTodo'
    ]),
    createTodo () {
      this.addTodo({
        ...this.newtodo
      })
      this.newtodo.text = ''
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
