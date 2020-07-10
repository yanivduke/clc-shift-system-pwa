<template>
  <v-container>
    <v-row justify="center">
      <v-col
        v-for="component in exampleComponents"
        :key="component.__file"
        cols="12"
        md="7"
        align="center"
      >
        <component :is="component"></component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Auth from '~/components/projects/Auth'

export default {
  components: {},
  data() {
    return {
      exampleComponents: [Auth],
    }
  },
  mounted() {
    // console.log(this.$fireAuth)
  },
  methods: {},
}
</script>
