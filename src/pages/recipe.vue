<template>
  <div class="recipe">
    <p>レシピメーカー</p>
    <div class="select">
      <span>キャラクター</span>
      <SelectBox v-model="character" :items="{'sol': 'ソル', 'ky': 'カイ'}" @change="fetch()" />
      <span>必殺技の表示</span>
      <SelectBox v-model="specialDisp" :items="{'name': '技名', 'input': '入力'}" />
    </div>
    <textarea v-model="text" class="textarea"/>
    <div class="buttons">
      <div class="normal"
        v-for="(type, index) in normal"
        :key="`normal_${index}`"
      >
        <Button
          v-for="(move, i) in type"
          :key="i"
          :value="move"
          @click="addText($event)"
          small
        >{{move}}</Button>
      </div>
      <div class="systems">
        <Button
          v-for="(move, index) in systems"
          :key="`systems${index}`"
          :value="move"
          @click="addText($event)"
          small
        >{{move}}</Button>
      </div>
      <div class="unique">
        <Button
          v-for="(move, index) in unique"
          :key="`unique${index}`"
          :value="move"
          @click="addText($event)"
          small
        >{{move}}</Button>
      </div>
      <div class="specials">
        <Button
          v-for="(item, index) in moveList.specials"
          :key="`specials${index}`"
          :value="item[specialDisp]"
          @click="addText($event)"
          small
          fit
        >{{item[specialDisp]}}</Button>
      </div>
      <div>
        <Button @click="onDelete" small>1つ戻る</Button>
        <Button @click="clear" small>クリア</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Button from '@/components/atoms/Button'
import SelectBox from '@/components/atoms/SelectBox'

export default {
  name: 'recipe',
  components: {
    Button,
    SelectBox,
  },
  data() {
    return {
      text: '',
      character: 'sol',
      specialDisp: 'name',
      normal: [
        ['P', 'K', 'S', 'HS', 'D'],
        ['2P', '2K', '2S', '2HS', '2D'],
        ['JP', 'JK', 'JS', 'JHS', 'JD'],
      ],
      systems: ['RC', 'YRC', '投げ', '空中投げ'],
      common: ['6P', '6HS'],
    }
  },
  computed: {
    ...mapState({
      moveList: state => state.moveList.move,
    }),
    unique() {
      return this.moveList.unique ? this.common.concat(this.moveList.unique) : this.common
    },
  },
  mounted() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$store.dispatch('moveList/get', this.character)
    },
    addText(name) {
      const prefix = this.text ? ' > ' : ''
      this.text = this.text + `${prefix}${name.target.value}`
    },
    onDelete() {
      const tgt = this.text.lastIndexOf(' > ')
      if (tgt > 0) this.text = this.text.slice(0, this.text.lastIndexOf(' > '))
    },
    clear() {
      this.text = ''
    },
  }
}
</script>
<style lang="scss" scoped>
.select {
  margin: 24px 0;
}

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

.buttons {
  margin: 32px auto 0;
  width: 600px;
}
</style>
