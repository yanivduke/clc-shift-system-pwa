<template>
  <div class="dialog-header">
    <div class="dialog-header__zone">
      <BasicText tag="h3" color="text-black" class="dialog-title">{{
        title
      }}</BasicText>
      <div class="dialog-close" @click="$emit('close')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicDialogHeader',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog {
  &-header {
    @include size(100%, auto);
    padding: 0 24px 0 24px;
    margin: 0;
    // background-color: var(--primary);
    background-color: var(--white);
  }
  &-header__zone {
    @include display-flex(space-between);
  }
  &-title {
    padding: 32px 0 32px 0;
  }
  &-close {
    @include size(10px);
    @include background-image('~assets/images/icons/CancelDark.svg');
  }
}
</style>
