<template>
  <div class="recipe">
    レシピメーカー
  </div>
</template>

<script>
export default {
  name: 'recipe',
  data() {
    return {
      recipe: 'recipe',
    }
  },
  methods: {
    // toggle(num) {
    //   this.isActive = num
    // },
  }
}
</script>
<style lang="scss" scoped>
.storage {
  .heading {
    padding: 24px;
  }
}

.nav {
  &-list {
    display: flex;
    justify-content: space-between;
  }
  &-item {
    padding: 24px;
    background: #f5f5f5;
    cursor: pointer;
    flex-grow: 1;
    text-align: center;
    transition: all 0.3s;
    &:hover {
      background: #dcdcdc;
    }
    &.is-active {
      background: #dcdcdc;
      cursor: default;
    }
  }
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: 49%;
  max-width: 500px;
}

@media screen and (max-width: 768px) {
  .storage {
    .heading {
      padding: 0;
    }
  }

  .item {
    width: 100%;
  }
}
</style>
