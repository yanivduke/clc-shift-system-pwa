<template>
  <v-list-item class="nav-menu__item" :to="config.to" router exact>
    <v-list-item-action>
      <v-icon>{{ config.icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="config.title" />
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'NavMenuItem',
  props: {
    config: {
      type: Object,
      default: () => {
        return {}
      },
      required: true,
    },
  },
}
</script>
