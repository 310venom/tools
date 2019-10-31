<template>
  <div class="counter">
    <ul class="player">
      <li>
        <p class="name">あなた</p>
        <p class="count">{{ myCount }}</p>
        <div class="button-list">
          <button class="button red" type="button" v-on:click="myCountDown">-1</button>
          <button class="button blue" type="button" v-on:click="myCountUp">+1</button>
        </div>
      </li>
      <li>
        <p class="name">相手</p>
        <p class="count">{{ oppCount }}</p>
        <div class="button-list">
          <button class="button red" type="button" v-on:click="oppCountDown">-1</button>
          <button class="button blue" type="button" v-on:click="oppCountUp">+1</button>
        </div>
      </li>
    </ul>
    <div class="result">
      <p>現在の戦績 : {{ myCount }} - {{ oppCount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data() {
    return {
      myCount: 0,
      oppCount: 0,
    }
  },
  methods: {
    myCountUp() {
      this.myCount++
    },
    myCountDown() {
      if (this.myCount !== 0) {
        this.myCount--
      }
    },
    oppCountUp() {
      this.oppCount++
    },
    oppCountDown() {
      if (this.oppCount !== 0) {
        this.oppCount--
      }
    },
  }
}
</script>
<style lang="scss" src="@css/base/common.scss"></style>
<style lang="scss" scoped>
.player {
  display: flex;
  justify-content: space-around;
  position: relative;

  &:before {
    display: inline-block;
    width: 40px;
    height: 40px;
    content: 'VS';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 30px;
  }

  li {
    min-width: 35%;
    padding: 8px;
    border: solid 1px #dcdcdc;
  }

  .count {
    text-align: center;
    font-size: 24px;
  }

  .name {
    text-align: center;
    font-size: 20px;
  }
}

.button-list {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
}

.result {
  margin-top: 24px;
  font-size: 24px;
}

@media screen and (max-width: 768px) {
  .player {
    flex-direction: column;

    li {
      width: 100%;
    }

    li + li {
      margin-top: 70px;
    }
  }

  .button-list {
    margin-top: 8px;
    .button {
      width: 50%;
    }
  }
}
</style>
