<template>
  <div class="common-select">
    <v-container>
      <v-select v-model="selectValue" :items="items" :label="label" dark />
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CommonSelect',
  props: {
    value: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    selectValue: {
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
