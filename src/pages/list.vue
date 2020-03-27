<template>
  <div class="tweet">
    <nav class="nav">
      <ul class="nav-list">
        <li v-for="(group, index) in tweet" :key="index" v-on:click="toggle(index)" class="nav-item">{{ group.genre }}</li>
      </ul>
    </nav>
    <div v-for="(group, index) in tweet" :key="index" class="block" v-show="isActive === index">
      <ul class="list">
        <li class="item" v-for="(item, index) in group.list" :key="index">
          <blockquote class="twitter-tweet" data-lang="ja"><a v-bind:href="'https://twitter.com/310_progressive/status/' + item + '?ref_src=twsrc%5Etfw'"></a></blockquote>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import tweet from '@json/data.json'

export default {
  name: 'list',
  data() {
    return {
      tweet: tweet,
      isActive: '',
    }
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    document.head.appendChild(recaptchaScript)
  },
  methods: {
    toggle(num) {
      this.isActive = num
    },
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
