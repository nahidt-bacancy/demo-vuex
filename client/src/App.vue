<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <AddTodo/>
      <FilterTodo/>
      <Todos/>
    </div>
    
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo'
import FilterTodo from './components/FilterTodo.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodo
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body{
  line-height: 1.6;
  background: #e8e8e8;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.container{
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
  overflow: auto;

}
</style>
