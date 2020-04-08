<template>
  <header>
    <h1><a href="/">tools</a></h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
header {
  background: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
  line-height: 1.2;
  padding: 4px 0;
}

h1 {
  flex: 1 1 auto;
  font-size: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  a {
    color: #000;
  }
}
</style>
