<template>
  <v-btn
    :class="['button', sizeClass, nuxtLinkClass]"
    :outlined="outlined"
    :color="colorType"
    :nuxt="isNuxtLink"
    :to="path"
    :disabled="isDisabled"
    :dark="isDark"
    :data-is-error="isError"
    v-on="$listeners"
  >
    <div class="button__prefix"><slot name="prefix"></slot></div>
    <template v-if="isLoading">
      <Loading />
    </template>
    <template v-else>
      <slot />
    </template>
    <div class="button__suffix"><slot name="suffix"></slot></div>
  </v-btn>
</template>

<script>
import Loading from '@/components/basic/Loading'

export default {
  name: 'CommonButton',
  components: {
    Loading,
  },
  props: {
    path: {
      type: Object,
      default: () => {},
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
    isNuxtLink: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default',
      validator: (size) => {
        return ['x-small', 'small', 'default', 'large', 'x-large'].includes(
          size,
        )
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
          'accent',
          'error',
          'link',
        ].includes(type)
      },
    },
  },
  computed: {
    sizeClass() {
      return 'v-size--' + this.size
    },
    colorType() {
      switch (this.type) {
        case 'default':
          return 'var(--text)'
        case 'primary':
          return 'var(--primary)'
        case 'secondary':
          return 'var(--secondary)'
        case 'accent':
          return 'var(--accent)'
        case 'error':
          return 'var(--alert-red1)'
        default:
          return 'var(--text)'
      }
    },
    nuxtLinkClass() {
      return this.isNuxtLink ? 'is-link' : ''
    },
  },
}
</script>
<style lang="scss">
.v-btn {
  &:not(.v-btn--round).v-size--default {
    // height: auto;
  }
  &:before {
    background-color: inherit;
  }
  &__content {
    width: 100%;
    height: 100%;
    justify-content: unset;
  }
}
</style>
<style lang="scss" scoped>
.v-btn {
  .button__prefix {
    height: 100%;
  }
  &:not(.v-btn--round).v-size--default {
    padding: 0;
  }
  &.is-link {
    background-color: unset !important;
    color: unset !important;
    box-shadow: unset !important;
    height: 100%;
    width: 100%;
  }
  &--outlined {
    // color: var(--text);
    // border: 1px solid var(--text);
    box-shadow: 0 4px 12px 0 var(--button-shadow);
    &:hover {
      // color: var(--accent);
      background-color: var(--bg-dark);
    }
  }
}
</style>
