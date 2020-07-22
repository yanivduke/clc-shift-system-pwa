<template>
  <div class="default-wrapper">
    <div class="default-container">
      <div class="default">
        <BasicNavMenu
          :is-expand="navMenuConfigs.isExpend"
          :default-width="navMenuConfigs.defaultWidth"
          :expand-width="navMenuConfigs.expandWidth"
          :nav-item-configs="navItemConfigs"
          :nav-setting-configs="navSettingConfigs"
          :logo-configs="logoConfigs"
        ></BasicNavMenu>
        <div
          class="content-container"
          :style="{ marginLeft: `${navMenuConfigs.defaultWidth}px` }"
        >
          <!-- <BasicHeader></BasicHeader> -->
          <nuxt class="content"></nuxt>
          <ErrorDialog
            v-if="dialogComponent === 'ErrorDialog'"
            :visible="isDialogShow"
            @close="setDialogShow(false)"
            @after-leave="setDialogComponent('')"
          />
          <BasicLoading key="loading" :visible="loadingCounter > 0" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import BasicNavMenu from '@/components/basic/NavMenu'
// import BasicHeader from '@/components/basic/Header'
import BasicLoading from '@/components/basic/Loading'
import ErrorDialog from '@/components/basic/Dialog/ErrorDialog'

export default {
  name: 'DefaultLayout',
  components: {
    BasicNavMenu,
    // BasicHeader,
    BasicLoading,
    ErrorDialog,
  },
  data() {
    return {
      navMenuConfigs: {
        isExpend: true,
        defaultWidth: 70,
        expandWidth: 220,
      },
      logoConfigs: {
        iconUrl: require('@/assets/images/static/PVC_Logo.svg'),
        itemRoute: { name: '' },
        itemText: 'CLC',
      },
      navItemConfigs: [
        {
          iconUrl: require('@/assets/images/icons/homepage.svg'),
          activeIconUrl: require('@/assets/images/icons/homepage_active.svg'),
          itemText: 'Dashboard',
          itemRoute: { name: 'index' },
        },
        {
          iconUrl: require('@/assets/images/icons/order_and_shipping.svg'),
          activeIconUrl: require('@/assets/images/icons/order_and_shipping_active.svg'),
          itemText: 'Ministry',
          itemRoute: { name: 'ministry', query: { status: 'all' } },
        },
        {
          iconUrl: require('@/assets/images/icons/quotation_and_sc.svg'),
          activeIconUrl: require('@/assets/images/icons/quotation_and_sc_active.svg'),
          itemText: 'Members',
          itemRoute: { name: 'members' },
        },
      ],
      navSettingConfigs: [
        {
          iconUrl: require('@/assets/images/icons/settings.svg'),
          activeIconUrl: require('@/assets/images/icons/settings_active.svg'),
          itemText: 'Settings',
          itemRoute: { name: 'settings' },
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      isDialogShow: 'dialog/isDialogShow',
      dialogComponent: 'dialog/dialogComponent',
      loadingCounter: 'loading/counter',
    }),
  },
  watch: {
    dialogComponent(newValue) {
      if (this.isValid(newValue)) {
        this.setDialogShow(true)
      } else {
        this.setDialogShow(false)
      }
    },
  },
  created() {},
  methods: {
    ...mapActions({
      setDialogShow: 'dialog/setDialogShow',
      setDialogComponent: 'dialog/setDialogComponent',
    }),
  },
}
</script>
<style lang="scss">
.default {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow-x: auto;

  .content-container {
    // margin: 0 auto;
    // min-width: $min_width;
    min-width: 1296px;
    background-color: var(--bg-dark);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .content {
    padding: 16px 16px 0 16px;
    height: 100%;
  }
}
</style>
