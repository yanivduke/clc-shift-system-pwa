<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="48%"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <basic-text tag="h6" color="text-secondary">
          {{ label }}
        </basic-text>
        <common-text-field
          v-model="dateFormatted"
          hint="MM/DD/YYYY format"
          color="#f4cf4f"
          v-bind="attrs"
          :persistent-hint="true"
          :readonly="true"
          :single-line="false"
          :is-dark="true"
          :is-solo="true"
          v-on="on"
          @blur="date = parseDate(dateFormatted)"
        />
      </template>
      <v-date-picker
        ref="picker"
        v-model="date"
        full-width
        locale="zh-cn"
        :first-day-of-week="0"
        :color="color"
        :header-color="headerColor"
        :landscape="$vuetify.breakpoint.smAndUp"
        :max="new Date().toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save"
        @input="menu = false"
      />
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    isBirthday: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'primary',
      validator: (color) => {
        return ['primary', 'secondary', 'accent'].includes(color)
      },
    },
    headerColor: {
      type: String,
      default: 'primary',
      validator: (color) => {
        return ['primary', 'secondary', 'accent'].includes(color)
      },
    },
  },
  data() {
    return {
      menu: false,
      date: this.isBirthday ? null : new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(this.date),
    }
  },
  computed: {
    // computedDateFormatted() {
    //   return this.formatDate(this.date)
    // },
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
  methods: {
    save(date) {
      // console.log(date)
      this.$refs.menu.save(date)
      this.$emit('save', date)
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      if ([month, day, year].includes(undefined)) return null
      this.menu = false

      const returnDate =
        `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}` || null

      return returnDate
    },
  },
}
</script>
