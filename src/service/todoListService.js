/**
 * todoList service
 */


export function save(todoList) {
  window.localStorage.setItem('todoList', JSON.stringify(todoList))
}

export function load() {
  // return ['haha']
  return JSON.parse(window.localStorage.getItem('todoList')) || []
}
