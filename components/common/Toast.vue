<template>
  <transition name="fade" apper="apper">
    <v-snackbar
      v-if="isVisible"
      v-model="isVisible"
      :top="y === 'top'"
      :right="x === 'right'"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :color="color"
      :multi-line="mode === 'multi-line'"
      :timeout="timeout"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="isVisible = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </transition>
</template>

<script>
export default {
  name: 'CommonToast',
  props: {
    color: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: '',
    },
    open: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    timeout: {
      type: Number,
      default: 3000,
    },
    x: {
      type: String,
      default: null,
    },
    y: {
      type: String,
      default: 'top',
    },
  },
  data() {
    return {
      // isVisible: this.open,
    }
  },
  computed: {
    isVisible: {
      get() {
        return this.open
      },
      set(value) {
        this.$emit('close', value)
      },
    },
  },
}
</script>
