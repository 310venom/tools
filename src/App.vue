<template>
  <div id="app">
    <SimplePage>
      <router-view/>
    </SimplePage>
  </div>
</template>

<script>
import SimplePage from '@/components/templates/SimplePage'
export default {
  name: 'App',
  components: {
    SimplePage,
  },
}
</script>

<style src="@css/index.scss"></style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
