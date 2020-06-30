<script>
const TAG_TYPES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']
export default {
  name: 'BasicText',
  props: {
    tag: {
      type: String,
      default: 'p',
      validator: (tag) => TAG_TYPES.includes(tag),
    },
    color: {
      type: String,
      default: 'text-black',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    },
  },
  render(createElement) {
    return createElement(
      `${this.tag}`,
      {
        // 樣式
        class: {
          text: true,
          [`text-${this.tag}`]: true,
          'text-required': this.isRequired,
        },
        // 顏色
        style: {
          color: `var(--${this.color})`,
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
.text {
  margin: 0;
  word-wrap: break-word;

  &-h1 {
    font-size: rem(36px);
    font-weight: 500;
  }
  &-h2 {
    font-size: rem(30px);
    font-weight: 500;
  }
  &-h3 {
    font-size: rem(24px);
    font-weight: 500;
  }
  &-h4 {
    font-size: rem(20px);
    font-weight: 500;
  }
  &-h5 {
    font-size: rem(18px);
    font-weight: 500;
  }
  &-h6 {
    font-size: rem(14px);
    font-weight: 500;
  }
  &-p {
    font-size: rem(14px);
    font-weight: 400;
  }
  &-span {
    font-size: rem(12px);
    font-weight: 400;
  }
  &-required {
    &::after {
      content: '*';
      margin-left: 2px;
      color: var(--alert-red1);
    }
  }
}
</style>
