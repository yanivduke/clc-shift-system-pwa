<template>
  <v-btn
    :class="['button', sizeClass, typeClass, fullClass, roundClass, plainClass]"
    :outlined="outlined"
    :color="colorType"
    :nuxt="isNuxtLink"
    :disabled="isDisabled"
    :dark="isDark"
    :data-is-error="isError"
    height="auto"
    v-on="$listeners"
  >
    <template v-if="isLoading">
      <Loading />
    </template>
    <template v-else>
      <slot />
    </template>
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
      default: 'small',

      // default: 'xs',
      // validator: (size) => {
      //   return ['xs', 'sm', 'md', 'lg', 'xl'].includes(size)
      // },
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
  computed: {
    colorType() {
      return this.type
    },
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
