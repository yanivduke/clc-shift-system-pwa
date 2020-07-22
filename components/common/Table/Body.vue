<template>
  <div class="table-body" :data-is-full="isFull">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isFull: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.table-body {
  flex-direction: column;
  padding: 0 22px 28px 22px;
  @include size(100%, 100%);
  @include display-flex(flex-start, flex-start);
  @include custom-scroll();

  // &[data-is-full='true'] {
  //   // @include size(100%, calc(100vh - 136px));
  // }
}
</style>
