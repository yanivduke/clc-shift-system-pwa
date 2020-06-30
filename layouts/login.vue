<template>
  <v-app>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  middleware: 'login',
}
</script>
