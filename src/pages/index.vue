<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/counter">counter</router-link>
      </li>
      <li>
        <router-link to="/list">list</router-link>
      </li>
      <li>
        <router-link to="/recipe">recipe</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Tools'
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  font-size: 16px;

  ul {

    li {
      margin-top: 16px;
    }
  }
}
</style>
