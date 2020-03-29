<template>
  <a v-if="href" :class="classes" :href="disabled ? null : href" :disabled="disabled" @click="handleClick">
    <slot />
  </a>
  <button v-else type="button" :class="classes" :disabled="disabled" @click="handleClick">
    <div v-if="$slots.icon" class="inner">
      <span class="icon"><slot name="icon"/></span>
      <span class="content"><slot /></span>
    </div>
    <slot v-else />
  </button>
</template>

<script>
/**
 * ボタン
 */
export default {
  name: 'Button',
  props: {
    /** リンク先URL */
    href: String,
    /** プライマリボタン */
    primary: Boolean,
    /** 注意ボタン */
    caution: Boolean,
    /** 危険ボタン */
    danger: Boolean,
    /** スモールボタン */
    small: Boolean,
    /** x-small ボタン */
    xSmall: Boolean,
    /** アイコンのみのボタン */
    icon: Boolean,
    /** 非活性 */
    disabled: Boolean,
  },
  computed: {
    classes() {
      return {
        button: !this.icon,
        'icon-button': this.icon,
        'is-lead': this.primary,
        'is-caution': this.caution,
        'is-alert': this.danger,
        'button--small': this.small,
        'x-small': this.xSmall,
      }
    },
  },
  methods: {
    handleClick(e) {
      if (this.disabled) return
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.inner {
  align-items: center;
  display: flex;
  line-height: normal;
  padding: 0 16px;
}

.icon {
  align-items: center;
  display: inline-flex;
}

.content {
  width: 100%;
}

.button {
  appearance: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 1px #ddd;
  box-sizing: border-box;
  color: #47a3cc;
  cursor: pointer;
  display: inline-block;
  fill: #666;
  font-size: 21px;
  font-weight: bold;
  height: 56px;
  line-height: 54px;
  margin: 0;
  outline: 0;
  padding: 0;
  text-align: center;
  user-select: none;
  min-width: 160px;

  &:focus {
    box-shadow: 0 0 0 3px #ffe082;
  }

  &.is-lead {
    background-color: #47a3cc;
    border: 0;
    color: #fff;
    fill: #fff;
  }

  &.is-caution {
    color: #e74c3c;
    fill: #e74c3c;
  }

  &.is-alert {
    color: #dd2c00;
    fill: #dd2c00;
  }

  &--small {
    border-radius: 4px;
    box-shadow: none;
    font-size: 15px;
    height: 40px;
    line-height: 38px;
    min-width: 112px;

    // @media screen and (max-width: 480px) {
    //   font-size: 11px;
    //   width: 20%;
    // }
  }

  &.x-small {
    border-radius: 4px;
    box-shadow: none;
    fill: #47a3cc;
    font-size: 15px;
    height: 32px;
    line-height: 30px;
    width: 80px;

    .icon {
      height: 18px;
      margin-right: 4px;
      width: 18px;
    }
  }

  &[disabled],
  &.is-disabled {
    background-color: #ccc;
    box-shadow: none;
    color: #ddd;
    cursor: default;
    fill: #999;
  }
}

.icon-button {
  align-items: center;
  appearance: none;
  background: none;
  border: none;
  box-shadow: none;
  cursor: pointer;
  display: inline-flex;
  fill: #47a3cc;
  height: auto;
  justify-content: center;
  line-height: 1;
  min-width: initial;
  outline: 0;
  padding: 0;

  &[disabled] {
    cursor: default;
    fill: #999;
  }

  &::after {
    content: '';
    height: 36px;
    position: absolute;
    width: 36px;
  }
}
</style>
