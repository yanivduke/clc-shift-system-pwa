<template>
  <div class="nav-item" v-on="$listeners">
    <div
      class="nav-item__head"
      :class="{
        active: activeIndex === itemIndex,
        OpenSubItems: activeIndex === itemIndex,
      }"
    >
      <div class="nav-item__zoon">
        <div class="nav-item__icons-box">
          <slot name="logo"></slot>
          <common-button
            class="nav-item__icons-link"
            type="link"
            :is-nuxt-link="true"
            :path="{
              name: itemRoute.name,
              query: itemRoute.query,
            }"
          >
            <span
              slot="prefix"
              class="icons"
              :style="{
                backgroundImage: `url(
                ${isActice ? activeIconUrl : iconUrl}
              )`,
              }"
            ></span>
            <basic-text
              v-if="isImage"
              tag="subtitle-2"
              :color="isActice ? 'white' : 'text'"
            >
              {{ itemText }}
            </basic-text>
            <img v-else class="nav-item__image" :src="itemText" />
          </common-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemIndex: {
      type: Number,
      default: 0,
    },
    activeIndex: {
      type: Number,
      default: -1,
    },
    iconUrl: {
      type: String,
      default: '',
    },
    activeIconUrl: {
      type: String,
      default: '',
    },
    itemText: {
      type: String,
      default: '',
    },
    itemRoute: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  computed: {
    isActice() {
      return this.itemIndex === this.activeIndex
    },
    isImage() {
      const test = this.itemText.split('/').length
      // console.log(test)
      if (test > 1) {
        return false
      } else {
        return true
      }
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.navMenu-zoon.isExpandNav {
  .title {
    opacity: 1;
  }
  .nav-item__icons-box {
    width: 204px;
  }
}
.nav {
  &-item {
    cursor: pointer;
    text-decoration: none;
    color: var(--text);
    display: block;
    position: relative;
  }
  &-item__head {
    // display: flex;
    position: relative;
    margin-bottom: 8px;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 2px;
      height: 0%;
      background: var(--primary);
      left: 0;
      top: 50%;
      transition: all 0.5s;
    }
  }
  &-item__zoon {
    border-radius: 4px;
  }
  &-item__image {
    width: 100px;
    height: 44px;
    // margin-bottom: 28px;
    // object-fit: contain;
  }
  &-item__icons-box {
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

    &:hover {
      background-color: var(--dark-shadow);
    }

    // margin-bottom: 2px;

    .icons {
      display: inline-block;
      width: 54px;
      height: 100%;
      @include background-setting(auto, false);
      background-size: 40%;
    }
    .arrow {
      display: inline-block;
      @include size(10px, 10px);
      @include background-image('~assets/images/static/ArrowDownGrey.svg');
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
      transition: all 0.5s;
    }
    .title {
      @include size(40%, 100%);
      text-align: left;
      display: flex;
      align-items: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.5s;

      // &:hover {
      //   // color: var(--primary-hover) !important;
      //   background-color: var(--hover-white);
      // }
    }
  }
}
.nav-item__head.active {
  // &::before {
  //   content: '';
  //   top: 0%;
  //   height: 100%;
  // }

  .nav-item__icons-box {
    //quotation_and_sc_active
    background-color: var(--primary);
  }
  .title {
    color: var(--white) !important;
  }
}
</style>
