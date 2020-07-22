<script>
export default {
  name: 'BasicLayout',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    },
  },
  render(createElement) {
    return createElement(
      'div',
      {
        // 樣式
        class: {
          [`layout-${this.type}`]: true,
        },
        // 事件
        on: {
          click: this.clickHandler,
        },
      },
      [this.$slots.default],
    )
  },
}
</script>

<style lang="scss" scoped>
.layout {
  &-header {
    margin-bottom: 15px;
    @include size(100%, auto);
    @include display-flex(space-between);
  }
  &-body {
    flex-direction: column;
    @include size(100%, auto);
    @include display-flex(center, flex-start);
  }
  &-zone {
    margin-top: 15px;
    padding: 20px;
    margin-bottom: 15px;
    background-color: var(--bg);
    border: solid 1px var(--dark-shadow);
    border-radius: 4px;
    box-shadow: 0 4px 10px 0 var(--dark-shadow);
    @include size(100%, auto);
  }
  &-center {
    @include display-flex();
  }
}
</style>
