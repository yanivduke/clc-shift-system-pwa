<template>
  <v-text-field
    v-model="inputValue"
    :append-icon="icon"
    :label="label"
    :color="color"
    :single-line="isSingleLine"
    :hide-details="hideDetails"
    :dark="isDark"
  />
</template>

<script>
export default {
  name: 'CommonTextField',
  props: {
    icon: {
      type: String,
      default: 'mdi-magnify',
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
