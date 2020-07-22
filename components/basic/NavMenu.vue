<template>
  <NavMenuLayout
    :is-expand="isExpand"
    :default-width="defaultWidth"
    :expand-width="expandWidth"
    @pushController="pushController"
  >
    <NavMenuItem slot="logo" class="logo-box" v-bind="logoConfigs" />
    <div slot="nav" class="nav-item-boxs">
      <div slot="nav" class="nav-configs">
        <NavMenuItem
          v-for="(itemConfig, index) in itemData"
          :key="itemConfig.itemText"
          :active-index="activeIndex"
          :item-index="index"
          v-bind="itemConfig"
        />
      </div>
      <div slot="header" class="user-configs">
        <NavMenuItem
          v-for="(itemConfig, index) in navSettingConfigs"
          :key="itemConfig.itemText"
          v-bind="itemConfig"
          :active-index="activeIndex"
          :item-index="index + itemData.length"
        />
      </div>
    </div>
  </NavMenuLayout>
</template>

<script>
// import { mapGetters } from 'vuex'
import NavMenuLayout from '@/components/basic/NavMenu/NavMenuLayout'
import NavMenuItem from '@/components/basic/NavMenu/NavMenuItem'

export default {
  name: 'NavMenu',

  components: {
    NavMenuLayout,
    NavMenuItem,
  },
  props: {
    navItemConfigs: {
      type: Array,
      default: () => {
        return []
      },
    },
    navSettingConfigs: {
      type: Array,
      default: () => {
        return []
      },
    },
    logoConfigs: {
      type: Object,
      default: () => {
        return {}
      },
    },
    isExpand: {
      type: Boolean,
      default: false,
    },
    defaultWidth: {
      type: Number,
      default: () => {
        return 85
      },
    },
    expandWidth: {
      type: Number,
      default: () => {
        return 250
      },
    },
  },
  data() {
    return {
      isNavMenuExpand: false,
      itemData: this.navItemConfigs,
      activeIndex: -1,
      toggleCascader: '',
    }
  },
  computed: {
    logoStyleHandler() {
      return {
        backgroundImage: `url(${this.logoConfigs.src})`,
      }
    },
    // ...mapGetters({
    //   accounts: 'user/accounts',
    //   currentUser: 'user/currentUser',
    //   currentIndex: 'user/currentIndex',
    //   isChangeAccount: 'user/isChangeAccount',
    // }),
  },
  watch: {
    $route(to) {
      console.log(to)
      this.updateActiveIndex(to.name)
    },
  },
  mounted() {
    this.updateActiveIndex(this.$route.name)
  },
  methods: {
    updateActiveIndex(routeName) {
      const routeArray = routeName.split('-')
      // if i18n, routeArray.length > 2
      if (routeArray.length > 1) {
        routeArray.pop()
      }
      const routeNow = routeArray.join('-')

      const arr = this.itemData.concat(this.navSettingConfigs)
      const newArr = []
      for (const item of arr) {
        newArr.push(item.itemRoute)
      }
      this.activeIndex = newArr.findIndex(({ name }) => name === routeNow)
    },
    pushController(width) {
      // 將箭頭none掉
      this.isNavMenuExpand = !this.isNavMenuExpand
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  &-box {
    margin-bottom: 45px;
  }
}
.nav-item-boxs {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 85px);
  flex-direction: column;
}
.user-configs {
  // position: absolute;
  margin-bottom: 28px;
}
</style>
