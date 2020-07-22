<template>
  <button
    :class="['button', sizeClass, typeClass, fullClass, roundClass, plainClass]"
    :data-is-disabled="isDisabled"
    :data-is-error="isError"
    :disabled="isDisabled || isLoading"
    v-on="$listeners"
  >
    <template v-if="isLoading">
      <!-- <div
        style="width: 1067px; height: 600px;"
        class="lottie"
        data-animation-path="animation/"
        data-anim-loop="true"
        data-name="ninja"
      /> -->
      <Loading />
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>

<script>
import Loading from '@/components/basic/Loading'

export default {
  name: 'BasicButton',
  component: {
    Loading,
  },
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isFull: {
      type: Boolean,
      default: false,
    },
    isRound: {
      type: Boolean,
      default: false,
    },
    isPlain: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'xs',
      validator: (size) => {
        return ['xs', 'sm', 'md', 'lg', 'xl'].includes(size)
      },
    },
    type: {
      type: String,
      default: 'primary',
      validator: (type) => {
        return [
          'default',
          'primary',
          'secondary',
          'success',
          'warning',
          'danger',
          'error',
        ].includes(type)
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    sizeClass() {
      return 'button--' + this.size
    },
    typeClass() {
      return 'button--' + this.type
    },
    fullClass() {
      return this.isFull ? 'is-full' : ''
    },
    roundClass() {
      return this.isRound ? 'is-round' : ''
    },
    plainClass() {
      return this.isPlain ? 'is-plain' : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  color: var(--white);
  border-radius: 4px;
  outline: 0;
  vertical-align: middle;
  & + .button {
    margin-left: 8px;
  }

  &.is-full {
    width: 100%;
  }
  &.is-round {
    border-radius: 9999px;
  }

  &.button--primary {
    &:not([data-is-disabled='true']):not([data-is-error='true']):not(.is-plain) {
      background-color: var(--primary);
      box-shadow: 0 4px 12px 0 var(--button-shadow);
      &:hover {
        background-color: var(--primary-hover);
      }
    }
    &.is-plain {
      color: var(--primary);
      border: 1px solid var(--primary);
      box-shadow: 0 4px 12px 0 var(--button-shadow);
      &:hover {
        background-color: var(--primary-hover);
      }
    }
  }
  &.button--error {
    &:not([data-is-disabled='true']):not([data-is-error='true']):not(.is-plain) {
      background-color: var(--alert-red1);
      box-shadow: 0 4px 12px 0 var(--button-shadow);
      &:hover {
        background-color: var(--alert-red2);
      }
    }
    &.is-plain {
      color: var(--alert-red1);
      border: 1px solid var(--alert-red1);
      &:hover {
        background-color: var(--alert-red2);
      }
    }
  }
  &[data-is-disabled='true'] {
    background-color: var(--disable-gray);
  }
  &.button--xs {
    padding: 7px 15px;
    font-size: rem(12px);
  }
  &.button--sm {
    padding: 9px 15px;
    font-size: rem(12px);
  }
  &.button--md {
    padding: 10px 20px;
    font-size: rem(14px);
  }
  &.button--lg {
    padding: 12px 20px;
    font-size: rem(14px);
  }
  &.button--xl {
    padding: 15px 25px;
    font-size: rem(16px);
  }
}
</style>
