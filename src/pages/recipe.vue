<template>
  <div class="recipe">
    レシピメーカー
    <textarea v-model="recipe" class="textarea"></textarea>
    <div v-for="(type, index) in moveList" :key="index">
      <Button
        v-for="(move, i) in type"
        :key="i"
        :value="move"
        @click="addText($event)"
        small
      >{{move}}</Button>
    </div>
    <div><Button @click="onDelete" small>1つ戻る</Button></div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button'

export default {
  name: 'recipe',
  components: {
    Button,
  },
  data() {
    return {
      text: [],
      moveList: {
        normal: ['P', 'K', 'S', 'HS', 'D', '2D'],
        air: ['JP', 'JK', 'JS', 'JHS', 'JD'],
        unipue: [],
        special: [],
      },
    }
  },
  computed: {
    recipe() {
      return this.text.join(' > ')
    },
  },
  methods: {
    addText(text) {
      this.text.push(text.target.value)
    },
    onDelete() {
      this.text.pop()
    },
  }
}
</script>
<style lang="scss" scoped>
.textarea {
  border: solid 1px #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
  height: 160px;
  padding: 16px;
  resize: none;
  width: 100%;
}
</style>
