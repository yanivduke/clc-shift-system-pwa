<template>
  <div class="dialog-header__default">
    <div class="dialog-header__zone">
      <BasicText tag="h3" color="white" class="dialog-title">
        {{ title }}
      </BasicText>
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
  &-header__default {
    @include size(100%, auto);
    padding: 0 24px 0 24px;
    margin: 0;
    // background-color: var(--primary);
    background-color: var(--white);
    background: linear-gradient(
      to right,
      #245068 0%,
      #24364e 40%,
      #24364e 100%
    );
  }
  &-header__zone {
    @include display-flex(space-between);
  }
  &-title {
    padding: 10px 0 10px 0;
  }
  &-close {
    @include size(10px);
    @include background-image('~assets/images/icons/CancelWhite.svg');
  }
}
</style>
