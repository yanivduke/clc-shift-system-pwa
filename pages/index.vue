<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" align="center">
        <Logo />
        <BasicText tag="h6" class="my-2" color="text-black">
          Nuxt-Firebase
        </BasicText>
      </v-col>
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
import Logo from '~/components/Logo'
import Auth from '~/components/projects/Auth'
export default {
  components: {
    Logo,
  },
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
