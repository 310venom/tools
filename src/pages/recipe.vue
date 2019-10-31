<template>
  <SimplePage>
    <div class="recipe">
      レシピメーカー
    </div>
  </SimplePage>
</template>

<script>
import SimplePage from '@/components/templates/SimplePage'

export default {
  name: 'recipe',
  components: {
    SimplePage,
  },
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

</style>
