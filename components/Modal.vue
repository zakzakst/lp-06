<template>
  <transition name="modal-fade">
    <div v-show="isActive" id="modal" class="modal">
      <div class="modal__content">
        <slot />
        <button class="modal__close-btn" @click="close">
          <close-icon />
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import closeIcon from '@/static/bootstrap-icons/x.svg'

export default {
  props: ['isActive'],
  components: {
    closeIcon,
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.modal {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  background: $color-overlay;
}
.modal__content {
  position: relative;
  max-width: 480px;
  max-height: 100%;
  margin: 0 24px;
  padding: 24px;
  background: $color-white;
  overflow: auto;
}
.modal__close-btn {
  position: absolute;
  display: flex;
  width: 32px;
  height: 32px;
  top: 8px;
  right: 8px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  // background: rgba(255, 255, 255, .6);
  background: $color-white;
  border: none;
  // border-radius: 50%;
  &:focus {
    outline: none;
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
