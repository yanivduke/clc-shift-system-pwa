<template>
  <div class="form_record">
    <BasicText tag="h6" color="text-secondary" class="form_record__tittle">
      {{ title }}
    </BasicText>
    <span v-if="content !== 1" class="form_record__tag">
      <span
        class="status-light"
        :style="{
          background: background(content),
        }"
      />
      {{ statusTag(content) }}
    </span>
  </div>
</template>
<script>
export default {
  name: 'DialogStatusTag',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    statusTag(status) {
      switch (status) {
        case 1:
          return ''
        case 2:
          return '備註'
        case 3:
          return '暫停中'
        default:
          throw new Error(`unknown key name ${status}`)
      }
    },
    background(status) {
      switch (status) {
        case 1:
          return ''
        case 2:
          return 'var(--accent)'
        case 3:
          return 'var(--alert-red1)'
        default:
          throw new Error(`unknown key name ${status}`)
      }
    },
  },
}
</script>
