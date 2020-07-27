<template>
  <div class="form_record">
    <BasicText tag="h6" color="text-secondary" class="form_record__tittle">
      {{ title }}
    </BasicText>
    <div class="form_record__contnet">
      <slot>
        <BasicText tag="p" color="text-secondary">{{ content }}</BasicText>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogMessage',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.form_record {
  @include size(100%, auto);
  min-height: 40px;
  display: flex;
  // justify-content: center;
  align-items: center;
  border-bottom: solid 1px var(--line);
  &__tittle,
  &__contnet {
    display: inline-block;
  }
  &__tittle {
    width: 30%;
  }
  &__contnet {
    width: 70%;
  }
}
</style>
