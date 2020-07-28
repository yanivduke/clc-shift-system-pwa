<template>
  <div class="dialog_card" @click="$emit('click', title)">
    <div class="dialog_card__item">
      <basic-text tag="h5" color="text-secondary">
        {{ title }}
      </basic-text>
    </div>
    <div class="dialog_card__item__hover">
      <basic-text tag="h5" color="text-secondary">
        {{ title }}
      </basic-text>
      <basic-text tag="p" color="text-secondary">
        {{ `${body}, leader is ${leader.name}` }}
      </basic-text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    leader: {
      type: Object,
      default: () => ({
        id: 0,
        name: '',
      }),
    },
  },
}
</script>

<style lang="scss">
.dialog_card {
  @include size(24%, auto);
  border: 1px solid var(--text);
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &__item__hover {
    position: absolute;
    top: -100%;
    left: 0;
    background-color: var(--primary-dark);
    width: 100%;
    height: 100%;
    transition: 0.3s;
    text-align: left;
    padding: 20px;
  }

  &__item {
    padding: 40px 20px;
  }

  &:hover {
    border: 1px solid #11ece5;
    box-shadow: 0 0 6px 0.7px #11ece5;
    .dialog_card__item__hover {
      top: 0;
    }
  }
}
</style>
