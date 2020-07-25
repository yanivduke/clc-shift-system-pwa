<template>
  <section class="ministry">
    <basic-layout type="header">
      <basic-text tag="h4">服事＆事工</basic-text>
    </basic-layout>
    <div class="ministry-zone">
      <common-tabs
        v-model="instanceTab.activeName"
        :value="instanceTab.activeName"
        :tabs="instanceTab.tabs"
        @input="handleClick"
      ></common-tabs>
      <nuxt-child class="ministry-part"></nuxt-child>
    </div>
  </section>
</template>

<script>
import TabOperation from '@/classes/TabOperation'
import { TAB } from '@/constants/ministry'

export default {
  name: 'MinistryLayout',
  data() {
    return {
      instanceTab: new TabOperation(TAB),
    }
  },
  created() {
    const { name } = this.$route
    this.instanceTab.updateActiveName(name)
  },
  methods: {
    handleClick(val) {
      const name = this.instanceTab.getPath(val)
      this.$router.push({ name })
    },
  },
}
</script>
<style lang="scss">
.ministry {
  overflow: hidden;
  padding: 17px 21px;
  @include size(100%, 100vh);
  &-zone {
    justify-content: flex-start;
    height: 100%;
  }
}
</style>

<style lang="scss" scoped>
::v-deep .ministry {
  &-part {
    width: 100%;
    height: calc(100% - 146px);
  }
}
</style>
