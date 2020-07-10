<template>
  <v-app dark class="app">
    <v-navigation-drawer
      v-model="drawer"
      :color="color"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :right="right"
      :permanent="permanent"
      absolute
      dark
    >
      <v-list dense nav class="py-5">
        <!-- <v-divider></v-divider> -->
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-if="token" v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-container class="container">
        <nuxt />
      </v-container>
    </v-main>
    <BasicLoading key="loading" :visible="loadingCounter > 0" />
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import BasicLoading from '@/components/basic/Loading'

export default {
  components: {
    BasicLoading,
  },
  middleware: 'auth',
  data() {
    return {
      fixed: false,
      drawer: true,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
        {
          title: 'Rick and Morty',
          icon: 'mdi-chart-bubble',
          to: '/rickandmorty',
        },
      ],
      account: { icon: 'mdi-account' },
      color: 'primary',
      colors: ['primary', 'blue', 'success', 'red', 'teal'],
      right: false,
      permanent: true,
      miniVariant: true,
      expandOnHover: true,
      background: false,
    }
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
    ...mapGetters({
      token: 'auth/token',
      loadingCounter: 'loading/counter',
    }),
  },
  methods: {
    async logout() {
      try {
        await this.$fireAuth.signOut()
        window.localStorage.removeItem('token')
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style lang="scss">
.app {
  height: 100vh;
  min-height: unset;
  .container {
    overflow-y: auto;
    max-height: 100vh;
  }
}
</style>
