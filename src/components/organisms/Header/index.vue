<template>
  <header>
    <!-- <div class="container">
      <Button v-if="showBack" class="back" :icon="BackIcon" @click="onBack" />
      <h1>{{ $i18n.choice(store.name) }}</h1>
    </div> -->
    header
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="postcss" scoped>
header {
  background: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
  line-height: 1.2;
}

.container {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 64px;
  justify-content: center;
  margin: 0 auto;
  padding: 0 16px;
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: calc(940px + 64px + 8px);
    padding: 0 32px;
  }
}

.back {
  margin: 0 4px 0 -4px;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
}

h1 {
  flex: 1 1 auto;
  font-size: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
}
</style>
