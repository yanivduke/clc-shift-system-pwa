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
      type: Number,
      default: 452,
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
  background-color: var(--white);
  @include size(452px, auto);
  min-width: 452px;
  // padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 var(--default-shadow);
  overflow: hidden;
}
</style>
