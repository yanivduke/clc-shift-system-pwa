<template>
  <div class="form_record">
    <BasicText tag="h6" color="text-secondary" class="form_record__tittle">
      {{ title }}
    </BasicText>
    <div class="form_record__chip">
      <div v-for="(name, index) in content" :key="index" class="dialog-chip">
        <v-chip
          v-if="name"
          :key="index"
          :color="getColor(name)"
          class="dialog-chip__inner"
        >
          {{ name.toString() }}
        </v-chip>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DialogChip',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getColor(name) {
      switch (name) {
        case 'Media':
          return '#6DB15A'
        case 'Worship':
          return '#8357D7'
        default:
          return '#6B6F76'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form_record {
  &__chip {
    width: 70%;
    padding: 7px 0;
  }
  .dialog-chip {
    display: inline-block;
    height: 22px;
    // margin: 8px 0;
    margin-right: 7px;
    &__inner {
      width: 100%;
      height: 100%;
      text-align: center;
      color: var(--white);
    }
  }
}
</style>
