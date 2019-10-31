<template>
  <div class="page">
    <Header class="header"/>
    <div class="main">
      <slot />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'

/**
 * 通常画面テンプレート
 */
export default {
  name: 'SimplePage',
  components: {
    Header,
    Footer,
  },
  props: {
    /** ヘッダー非表示 */
    hideHeader: { type: Boolean, default: false },
    /** 戻るボタン */
    showBack: { type: Boolean, default: false },
  },
  methods: {
    // onBack() {
    //   this.$emit('back')
    // },
  },
}
</script>

<style lang="postcss" scoped>
.page {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 2;
}

.main {
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  margin: 0 auto;
  padding: 8px 16px 16px;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 940px;
    padding: 16px 0 56px;
  }
}

.footer {
  flex-shrink: 0;
}
</style>
