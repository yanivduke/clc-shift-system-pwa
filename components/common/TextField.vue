<template>
  <v-text-field
    v-model="inputValue"
    :append-icon="icon"
    :label="label"
    :color="color"
    :single-line="isSingleLine"
    :hide-details="hideDetails"
    :dark="isDark"
    :solo="isSolo"
    height="100%"
  />
</template>

<script>
export default {
  name: 'CommonTextField',
  props: {
    icon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#f4cf4f',
    },
    isSingleLine: {
      type: Boolean,
      default: false,
    },
    hideDetails: {
      type: String,
      default: 'auto',
    },
    isDark: {
      type: Boolean,
      default: true,
    },
    isSolo: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style lang="scss">
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: unset;
  background-color: var(--deep-dark);
}
.v-text-field.v-text-field--enclosed {
  height: 100%;
}
.v-text-field.v-text-field--solo .v-input__control {
  height: 100%;
}
</style>
