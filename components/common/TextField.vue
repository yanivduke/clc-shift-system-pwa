<template>
  <v-text-field
    v-model="inputValue"
    :append-icon="icon"
    :label="label"
    :color="color"
    :single-line="isSingleLine"
    :hide-details="hideDetails"
    :rules="rules"
    :dark="isDark"
    :solo="isSolo"
    :hint="hint"
    :persistent-hint="persistentHint"
    :error="isError"
    :error-messages="errorMessages"
    :readonly="readonly"
    height="100%"
    v-on="$listeners"
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
    rules: {
      type: Array,
      default: () => [],
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
    hint: {
      type: String,
      default: '',
    },
    persistentHint: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    errorMessages: {
      type: [String, Array],
      default: '',
    },
    readonly: {
      type: Boolean,
      default: false,
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

.theme--dark.v-messages {
  &[role='alert'] {
    color: var(--alert-red1);
  }
}
.error--text {
  color: var(--alert-red1) !important;
  &[role='button'] {
    .v-input__slot {
      color: var(--alert-red1);
      border: 1px solid var(--alert-red1);
    }
  }
}
</style>
