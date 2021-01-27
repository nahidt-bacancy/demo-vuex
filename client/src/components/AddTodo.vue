<template>
  <div>
      <h3>Add Todo</h3>
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add todo...">
        <input type="submit" value="submit">
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
name: "AddTodo",
data(){
  return{
    title:''
  }
},
methods: {
  ...mapActions(['addTodo']),
  onSubmit(e){
    e.preventDefault()
    this.addTodo(this.title)
  }
}
}
</script>

<style scoped>
form{
  display: flex;
}

input[type="text"]{
  flex: 10;
  border: 1px solid rgb(231, 124, 146);;
  padding: 10px;
  outline: 0;
}

input[type="submit"]{
  flex: 2;
  color: antiquewhite;
  border: 1px solid rgb(231, 124, 146);;
  background: rgb(231, 124, 146);;
  cursor: pointer;
}

</style>