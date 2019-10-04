<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/counter">counter</router-link>
        <router-link to="/list">list</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'INDEX'
    }
  }
}
</script>

<style scoped>

</style>
