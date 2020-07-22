<template>
  <header class="header" :data-is-setting="isSetting">
    <BasicText
      :tag="!isDahsboard ? 'h3' : 'h1'"
      :color="isSetting ? 'white' : 'text-black'"
      class="header-title"
    >
      {{ title }}
    </BasicText>
  </header>
</template>

<script>
export default {
  name: 'BasicHeader',
  props: {},
  data() {
    return {
      user: 'Spencer',
      title: '',
    }
  },
  computed: {
    isSetting() {
      return this.title === 'settings.title'
    },
    isDahsboard() {
      return this.title === 'dashboard.title'
    },
  },
  watch: {
    $route(to) {
      const { name } = to
      this.getHeaderTitle(name)
    },
  },
  created() {
    const { name } = this.$route
    this.getHeaderTitle(name)
  },
  methods: {
    getHeaderTitle(name) {
      switch (name) {
        case 'lang':
          this.title = 'dashboard.title'
          break
        case 'lang-quotation-sc':
        case 'lang-quotation':
        case 'lang-quotation-id':
        case 'lang-quotation-sc-id':
          this.title = 'quotation.name'
          break
        case 'lang-settings':
          this.title = 'settings.title'
          break
        case 'lang-shipment':
        case 'lang-shipment-shipping':
        case 'lang-shipment-arrival':
        case 'lang-shipment-id':
        case 'lang-shipment-shipping-id':
        case 'lang-shipment-arrival-id':
        case 'lang-shipment-addshipment':
          this.title = 'shipment.title'
          break
        case null:
          this.title = ''
          break
        default:
          this.title = name.split('-')[1]
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  &[data-is-setting='true'] {
    background-color: var(--primary);
    margin: 0;
    @include size(100%, 60px);
    padding: 0px 24px 8px;
    align-items: flex-end;
    box-shadow: 0px 4px 10px rgba(24, 91, 163, 0.16);
  }

  // &[data-is-form='true'] {
  //   position: relative;
  //   background-color: var(--dark);
  //   box-shadow: 0px 4px 10px rgba(11, 57, 106, 0.1);
  //   .header-title {
  //     color: var(--white) !important;
  //     text-align: center;
  //     width: 100%;
  //   }
  // }
  @include size(100%, auto);
  @include display-flex(space-between);
  margin-top: 24px;
  padding: 0 20px;
  &-title {
    text-transform: capitalize;
  }
  &-bell {
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid var(--text-light-grey);
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
  &-information {
    cursor: pointer;
    position: absolute;
    @include size(32px, 32px);
    right: 16px;
    @include display-flex();
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
