<template>
  <BasicOverlay
    :visible="visible"
    @enter="openDialog"
    @appear="openDialog"
    @click="closeDialog"
    @after-leave="$emit('after-leave')"
  >
    <transition :name="transitionName" @leave="$emit('update:visible', false)">
      <div v-if="open" class="dialog" :style="{ width: `${width}px` }">
        <div v-for="(item, index) in 7" :key="index" class="dialog__light" />
        <template>
          <slot name="header">
            <DialogHeader :title="title" @close="closeDialog" />
          </slot>
        </template>
        <DialogBody>
          <slot></slot>
        </DialogBody>
        <DialogFooter v-if="isHaveFooter">
          <slot name="footer" :closeDialog="closeDialog"></slot>
        </DialogFooter>
      </div>
    </transition>
  </BasicOverlay>
</template>

<script>
import DialogHeader from './Header'
import DialogBody from './Body'
import DialogFooter from './Footer'
import BasicOverlay from '@/components/basic/Overlay'

export default {
  name: 'BasicDialogLayout',
  components: {
    DialogHeader,
    DialogBody,
    DialogFooter,
    BasicOverlay,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: 'inherit',
    },
    title: {
      type: String,
      default: '',
    },
    direction: {
      type: String,
      default: 'fade',
      validator: (direction) => {
        return ['fade', 'fadeDown'].includes(direction)
      },
    },
  },
  data() {
    return {
      open: this.visible,
    }
  },
  computed: {
    transitionName() {
      switch (this.direction) {
        case 'fade':
          return 'fade'
        case 'fadeDown':
          return 'fade-down'
        default:
          return ''
      }
    },
    isHaveFooter() {
      return !!this.$slots.footer || !!this.$scopedSlots.footer
    },
  },
  methods: {
    random(num) {
      return Math.floor(Math.random() * num + 1)
    },
    openDialog() {
      this.open = true
    },
    closeDialog() {
      this.$emit('close-but-not-finished')
      this.open = false
    },
    // destroy() {
    //   this.$destroy()
    // },
  },
}
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include size(80%, auto);
  max-width: 900px;
  // padding: 32px;
  border-radius: 20px;
  overflow: hidden;
  // box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4), 0 0 150px 75px var(--primary);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.4), 0 0 150px 75px rgb(56, 125, 123);
  // box-shadow: 0 4px 12px 0 var(--default-shadow);

  &__light {
    position: absolute;
    height: 1px;
    background: #11ece5;
    box-shadow: 0 0 6px 0.7px #11ece5;
    &:nth-child(1) {
      top: 0px;
      left: 12%;
      width: 33%;
    }
    &:nth-child(2) {
      top: 0px;
      left: 47%;
      width: 2%;
    }
    &:nth-child(3) {
      top: 0px;
      left: 51.5%;
      width: 3%;
    }
    &:nth-child(4) {
      top: 0px;
      right: 7%;
      width: 18%;
    }
    &:nth-child(5) {
      bottom: 0px;
      left: 14%;
      width: 5%;
    }
    &:nth-child(6) {
      bottom: 0px;
      right: 39.5%;
      width: 3%;
    }
    &:nth-child(7) {
      bottom: 0px;
      right: 16%;
      width: 22%;
    }
  }
}
</style>
