<script>
const TAG_TYPES = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle-1',
  'subtitle-2',
  'body-1',
  'body-2',
  'button',
  'caption',
  'overline',
]

export default {
  name: 'BasicText',
  props: {
    tag: {
      type: String,
      default: 'body-1',
      validator: (tag) => TAG_TYPES.includes(tag),
    },
    color: {
      type: String,
      default: 'text',
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
      `div`,
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

//
<style lang="scss" scoped>
.text {
  margin: 0;
  word-wrap: break-word;

  &-h1 {
    font-size: 6rem;
    font-weight: 300;
    letter-spacing: -0.09375rem;
  }
  &-h2 {
    font-size: 3.75rem;
    font-weight: 300;
    letter-spacing: -0.03125rem;
  }
  &-h3 {
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: normal;
  }
  &-h4 {
    font-size: 2.125rem;
    font-weight: 500;
    letter-spacing: 0.015625rem;
  }
  &-h5 {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: normal;
  }
  &-h6 {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.009375rem;
  }

  &-subtitle-1 {
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.009375rem;
  }
  &-subtitle-2 {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.00625rem;
  }
  &-body-1 {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.03125rem;
  }
  &-body-2 {
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.015625rem;
  }
  &-button {
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.078125rem;
  }
  &-caption {
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.025rem;
  }
  &-overline {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.1666666667em;
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
