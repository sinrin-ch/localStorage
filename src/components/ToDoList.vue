<template>
  <div>
    <div><span>一个数</span><span>{{count}}</span>
      <button @click="inc">+</button>
      <button @click="dec">-</button>
    </div>
    <div><span>待办事项:</span><input type="text" v-model="todoInput">
      <button @click="add">添加</button>
      <button @click="save">保存</button>
    </div>
    <ul>
      <li v-for="item in todoList">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  import {save, load} from '@/service/todoListService'
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    name: "to-do-list",
    data: function () {
      return {
        todoList: ['haha', 'hehe', 'hoho'],
        todoInput: ''
      }
    },
    mounted: function () {
      this.todoList = load();
    },
    methods: {
      add() {
        this.todoList.push(this.todoInput);
      },
      save() {
        save(this.todoList);
      },
      ...mapMutations({
        inc: 'increment',
        dec: 'decrement'
      })
    },
    computed: {
      ...mapGetters({
        count: 'count'
      })
    }
  }
</script>

<style scoped>
  li {

  }
</style>
