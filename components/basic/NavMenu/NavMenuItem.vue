<template>
  <div class="nav-item" v-on="$listeners">
    <div
      class="nav-item__head"
      :class="{
        active: activeIndex === itemIndex,
        OpenSubItems: activeIndex === itemIndex,
      }"
    >
      <nuxt-link
        :to="{
          name: itemRoute.name,
          query: itemRoute.query,
        }"
        data-test="label"
      >
        <div class="nav-item__zoon">
          <a class="nav-item__icons-box">
            <span
              class="icons"
              :style="{
                backgroundImage: `url(
                ${activeIndex !== itemIndex ? iconUrl : activeIconUrl}
              )`,
              }"
            />
            <BasicText v-if="isImage" tag="h6" class="title">{{
              itemText
            }}</BasicText>
            <img v-else class="nav-item__image" :src="itemText" />
            <span class="arrow" :class="{ none: !isArrowShow }"></span>
          </a>
        </div>
      </nuxt-link>
    </div>
    <ul class="nav-sub-items" :class="{ active: isOpenSubItems }">
      <li
        v-for="(subItem, index) in subItems"
        :key="index"
        class="sub-item"
        @click.prevent="$emit('subItemClicked', subItem)"
      >
        <span>{{ subItem }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isOpenSubItems: {
      type: Boolean,
      default: false,
    },
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
    isActive: {
      type: Boolean,
      default: false,
    },
    subItems: {
      type: Array,
      default: () => {
        return []
      },
    },
    isArrowShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    isImage() {
      const test = this.itemText.split('/').length
      console.log(test)
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
    margin-bottom: 28px;
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

  &-sub-items {
    position: relative;
    display: block;
    overflow-y: hidden;
    width: 100%;
    margin-left: 20px;
    padding-left: 10px;
    height: auto;
    max-height: 0;
    transition: all 0.5s;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 2px;
      height: 100%;
      background: var(--line);
      left: 10px;
      top: 0;
      transition: all 0.5s;
    }
    .sub-item {
      position: relative;
      display: block;
      width: 80%;
      text-decoration: none;
      font-size: rem(16px);
      color: var(--text-black);
      margin-bottom: rem(10px);
      padding-left: 35px;
      text-transform: capitalize;
      &:nth-child(1) {
        // margin-top: rem(10px);
      }
      &:nth-last-child(1) {
        margin: unset;
      }
      &:hover {
        color: var(--primary-hover);
      }
    }
  }
}
.nav-sub-items.active {
  display: block;
  max-height: 300px;
  margin-left: 20px;
  padding-left: 10px;
  // padding-bottom: 8px;
}
.nav-item__head.OpenSubItems {
  .arrow {
    transform: translateY(-50%) rotate(180deg);
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

.arrow.none {
  opacity: 0;
  // display: none;
}

@media screen and (max-height: 450px) {
  .navMenu-zoon {
    .nav-item {
      font-size: 16px;
    }
    .nav-sub-items {
      .sub-item {
        font-size: 16px;
      }
    }
  }
}
</style>
