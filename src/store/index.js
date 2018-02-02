import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      count: 0,
      todoList: []
    },
    actions: {},
    getters: {
      todoListCount: state => state.todoList.length,
      count: state => state.count
    },
    mutations: { // 提交
      increment: state => state.count++,
      decrement: state => state.count--
    }
  }
)

