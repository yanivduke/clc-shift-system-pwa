<template>
  <div class="common-select">
    <v-select
      v-model="selectValue"
      :items="items"
      :label="label"
      :chips="chips"
      :multiple="multiple"
      dark
      hint="What are the target regions"
      persistent-hint
      @blur="blur"
    >
      <template v-for="(slotName, index) in slotKeys" v-slot:selection="data">
        <slot :name="slotName" :data="data" :index="index"> </slot>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'CommonSelect',
  props: {
    value: {
      type: [String, Array],
      default: () => '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    chips: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // selectValue: this.value,
    }
  },
  computed: {
    selectValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    slotKeys() {
      // 使用this.$scopedSlots 即可取得從外層 scope slot 近來的所有 slot，因此可以將其轉為 slot name array
      console.log(this.$scopedSlots)
      return Object.keys(this.$scopedSlots)
    },
  },
  watch: {
    multiple(val) {
      if (val) this.selectValue = [this.selectValue]
      else this.selectValue = this.selectValue[0] || this.value
    },
  },
  methods: {
    blur() {
      // console.log(this.$children[0].isMenuActive)
      // 將 select 裡面的 menu 關閉
      this.$children[0].isMenuActive = false
    },
  },
}
</script>
<style lang="scss">
.common-select {
  @include size(100%, auto);
  min-height: 40px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // border-bottom: solid 1px var(--line);
}
</style>
