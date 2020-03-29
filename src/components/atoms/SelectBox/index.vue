<template>
  <label class="select-box">
    <select v-bind="$attrs" :value="value" v-on="changeListeners">
      <option v-for="item in list" :key="item.key" :value="item.key">{{ item.label }}</option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'SelectBox',
  inheritAttrs: false,
  model: {
    props: 'value',
    event: 'change',
  },
  props: {
    /** 値 */
    value: [String, Number],
    /** 選択肢 */
    items: [Object, Array],
  },
  computed: {
    list() {
      if (this.items instanceof Array) return this.items.map((value, index) => ({ key: index, label: value }))
      if (this.items instanceof Object) return Object.keys(this.items).map(key => ({ key, label: this.items[key] }))
      return this.items
    },
    changeListeners() {
      return {
        ...this.$listeners,
        change: e => {
          this.$emit('change', e.target.value)
        },
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.select-box {
  display: inline-block;
  position: relative;

  &::after {
    border: 5px solid transparent;
    border-left: 5px solid #757575;
    box-sizing: border-box;
    content: '';
    height: 5px;
    pointer-events: none;
    position: absolute;
    right: 16px;
    top: 18px;
    transform: rotate(90deg);
    width: 5px;
  }

  select {
    appearance: none;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    color: #5a5a5a;
    cursor: pointer;
    font-size: 15px;
    height: 40px;
    margin: 0;
    outline: 0;
    padding: 0 36px 0 16px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 100%;

    &:invalid {
      color: #999;

      option {
        color: #5a5a5a;
      }
    }
  }
}
</style>
