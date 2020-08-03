<template>
  <div class="cascader" @click="toggleAccount">
    <div class="cascader-zoon">
      <span class="cascader-zoon-container" :data-show="className.show">
        <span class="cascader-zoon-container_icon" :data-main="isMain" />
        <div>
          <BasicText
            tag="h6"
            class="cascader-zoon-container_title"
            :color="isMain ? 'accent' : 'text'"
          >
            {{ label }}
          </BasicText>
          <BasicText
            tag="subtitle-2"
            class="cascader-zoon-container_title"
            :color="isMain ? 'accent' : 'text'"
          >
            {{ labelNumber }}
          </BasicText>
        </div>
        <span class="cascader-zoon-container_arrow" />
      </span>
    </div>
    <div :class="className">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="cascader-sub-block"
        :data-current="index === currentIndex"
      >
        <div class="cascader-sub-block-icon" :data-main="option.ismain" />
        <div class="cascader-sub-block-content">
          <template v-if="option.ismain">
            <BasicText tag="subtitle-2" color="text">
              Main account
            </BasicText>
            <BasicText
              tag="h6"
              class="cascader-sub-block-content-name"
              color="text"
            >
              {{ option.name }}
            </BasicText>
            <BasicText class="cascader-sub-block-content-number" color="text">
              {{ option.group }}
            </BasicText>
            <BasicText class="cascader-sub-block-content-number" color="text">
              {{ option.virtual_account }}
            </BasicText>
          </template>
          <!-- <template v-else>
            <BasicText tag="h6" class="cascader-sub-block-content-name">
              {{ option.name }}
            </BasicText>
            <BasicText class="cascader-sub-block-content-number">
              {{ option.group }}
            </BasicText>
            <BasicText class="cascader-sub-block-content-number">
              {{ option.virtual_account }}
            </BasicText>
          </template> -->
        </div>
      </div>
      <!-- <BasicButton type="default" class="cascader-sub-logout" @click="logout">
        登出
      </BasicButton> -->
      <common-button
        type="default"
        class="cascader-sub-logout"
        :outlined="true"
        :dark="true"
        :disabled="isDisabled"
        @click="logout"
      >
        登出
      </common-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cascader',
  props: {
    isExpand: {
      type: Boolean,
      required: true,
    },
    // isChangeAccount: {
    //   type: Boolean,
    //   required: true,
    // },
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    labelNumber: {
      type: String,
      default: '',
    },
    isMain: {
      type: Boolean,
      default: false,
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
    toggleCascader: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      className: {
        'cascader-sub': true,
        hide: true,
        show: false,
      },
    }
  },
  watch: {
    isExpand(val) {
      // close the sub item for collapsing nav bar
      if (!val) {
        this.className.show = false
        this.className.hide = true
      }
    },
    toggleCascader(val) {
      if (val !== 'cascader') {
        this.className.show = false
        this.className.hide = true
      }
    },
  },
  mounted() {
    // if (this.isChangeAccount) {
    //   this.$message({
    //     showClose: true,
    //     duration: 5000,
    //     offset: document.body.offsetHeight - 104,
    //     message: `Change account to ${this.label} ${this.labelNumber}`,
    //     type: 'success',
    //   })
    //   this.$store.dispatch('user/setIsChangeAccount', false)
    // }
  },
  methods: {
    toggleAccount() {
      if (this.isExpand) {
        this.className.show = !this.className.show
        this.className.hide = !this.className.hide
        this.$emit('update:toggleCascader', 'cascader')
      }
    },
    // changeCurrentValue(index) {
    //   this.$store.dispatch('user/setCurrentIndex', index)
    //   this.$store.dispatch('user/setIsChangeAccount', true)
    //   window.location.reload()
    // },
    logout() {
      window.localStorage.clear()
      window.location.reload()
    },
  },
}
</script>
<style lang="scss" scoped>
.navMenu-zoon.isExpandNav {
  .cascader-zoon-container {
    & > div,
    &_arrow {
      opacity: 1;
    }
  }
  .cascader-zoon-container {
    width: 204px;
  }
}

.hide {
  opacity: 0;
  display: none;
}

.show {
  opacity: 1;
  display: flex;
}

.cascader {
  cursor: pointer;
  text-decoration: none;
  color: var(--text);

  display: block;
  position: relative;

  &-zoon {
    border-radius: 4px;

    &-container {
      display: inline-block;
      width: 54px;
      height: 44px;
      vertical-align: middle;
      border-radius: 4px;
      margin-left: 8px;
      margin-right: 8px;
      overflow-y: hidden;
      white-space: nowrap;
      transition: all 0.5s;

      & > div {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all 0.5s;
      }

      &[data-show='true'] {
        background-color: var(--hover-white);
      }

      &_icon {
        background-image: url('~assets/images/icons/account.svg');
        display: inline-block;
        width: 54px;
        height: 100%;
        @include background-setting(auto, false);

        &[data-main='true'] {
          background-image: url('~assets/images/icons/main_account.svg');
        }
      }

      &_arrow {
        display: inline-block;
        @include size(20px, 20px);
        @include background-image('~assets/images/icons/ArrowRightBlue.svg');
        position: absolute;
        right: 32px;
        top: 50%;
        transform: translate(50%, -50%);
        opacity: 0;
        transition: all 0.5s;
        padding: 4px;
        border-radius: 8px;
        // background-color: var(--ice-blue);
      }

      &_title {
        &:hover {
          color: var(--white) !important;
        }
      }
    }
  }

  &-sub {
    position: absolute;
    bottom: -28px;
    left: calc(100% - 8px);
    flex-direction: column;
    z-index: 9999;
    width: 211px;
    background-color: var(--bg-dark);
    border-radius: 4px;
    box-shadow: 0px 4px 16px rgba(11, 57, 106, 0.16);
    transition: all 0.5s;
    padding: 4px 16px 0px;

    &-block {
      width: 100%;
      display: flex;
      border-radius: 4px;
      padding-top: 12px;
      padding-bottom: 8px;
      margin: 0px;

      &[data-current='true'] {
        background-color: var(--deep-dark);
      }

      &:hover {
        box-shadow: 0px 1px 6px var(--dark-shadow);
        background-color: var(--dark-shadow);
      }

      &-icon {
        background-image: url('~assets/images/icons/account.svg');
        width: 54px;
        @include background-setting(auto, false);

        &[data-main='true'] {
          background-image: url('~assets/images/icons/main_account.svg');
        }
      }

      &-content {
        display: flex;
        flex-direction: column;
        line-height: 1;

        &-name {
          margin: 4px 0px !important;
        }

        &-number {
          margin: 2px 0px !important;
          font-size: 10px !important;
        }
      }
    }

    &-logout {
      color: var(--text) !important;
      border: 1px solid var(--line);
      margin: 16px 0px 24px;
    }
  }
}
</style>
