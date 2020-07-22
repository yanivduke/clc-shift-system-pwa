<template>
  <v-app dark class="app">
    <nav-menu :nav-config="navConfig" @resize="resize" />
    <div class="default-wrapper">
      <div class="default-container">
        <div class="default" :data-is-shift="bodyShift">
          <nuxt />
        </div>
      </div>
    </div>
    <BasicLoading key="loading" :visible="loadingCounter > 0" />
  </v-app>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import BasicLoading from '@/components/basic/Loading'
import NavMenu from '@/components/common/NavMenu/index'

export default {
  components: {
    BasicLoading,
    NavMenu,
  },
  middleware: 'auth',
  data() {
    return {
      bodyShift: false,
      navConfig: {
        layout: {
          drawer: true,
          color: 'bg_dark',
          expandOnHover: true,
          miniVariant: true,
          right: false,
          permanent: true,
          absolute: true,
          dark: true,
          minWidth: 66,
          width: 190,
        },
        items: [
          {
            title: 'Dashboard',
            icon: 'mdi-view-dashboard',
            color: 'accent',
            to: '/',
          },
          {
            title: 'Services',
            icon: 'mdi-chart-bubble',
            color: 'accent',
            to: '/services',
          },
        ],
      },
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
    resize(val) {
      console.log(val)
      if (val === '190px') {
        this.bodyShift = true
      } else {
        this.bodyShift = false
      }
    },
    async logout() {
      try {
        await console.log('logout')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style lang="scss">
.app {
  .default {
    overflow-y: auto;
    margin-left: 66px;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    transition-property: margin-left;
    background-color: var(--bg-dark2);
    &[data-is-shift='true'] {
      margin-left: 190px;
      min-width: 1374px;
    }
  }
}
</style>
