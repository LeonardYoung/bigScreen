<template>
  <div id="app">
<!--    <DataTable class="old"/>-->
<!--    <h1>&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</h1>-->
    <TableSecond/>
  </div>
</template>

<script>
// import DataTable from "./components/DataTable";
import TableSecond from "./components/TableSecond";

export default {
  name: 'App',
  components: {
    // DataTable,
    TableSecond
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .old{
    display: none;
  }
</style>
