<template>
  <transition name="loading-fade" @after-leave="setLoadDone">
    <div id="loading" class="loading" v-if="loading">
      <transition name="loading-text-fade" @after-leave="showPage">
        <div ref="loadingText" v-show="loadingText" class="loading__text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import MixinWindowFix from '@/mixins/windowFix'

import { gsap } from "gsap"

export default {
  data: () => ({
    loading: true,
    loadingText: true,
    loadDone: false,
  }),
  mixins: [
    MixinWindowFix,
  ],
  methods: {
    scaleUpText() {
      const self = this;
      gsap.to(this.$refs.loadingText.children, {
        duration: .7,
        scale: 1.5,
        stagger: {
          each: .15,
          ease: 'linear',
        },
        onComplete() {
          self.scaleDownText();
        }
      });
    },
    scaleDownText() {
      const self = this;
      gsap.to(this.$refs.loadingText.children, {
        duration: .7,
        scale: 1,
        stagger: {
          each: .15,
          ease: 'linear',
        },
        onComplete() {
          if (self.loadDone === true) {
            self.loadingText = false;
          } else {
            self.scaleUpText();
          }
        }
      });
    },
    showPage() {
      setTimeout(() => {
        this.windowFixClear();
        this.loading = false;
      }, 500);
    },
    setLoadDone() {
      this.$store.dispatch('setLoadDone', true);
    },
    start() {
      this.scaleUpText();
    },
    finish() {
      this.loadDone = true;
    },
  },
  mounted() {
    this.windowFix();
  },
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.loading {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background: #000;
  z-index: $z-loading;
}
.loading__text {
  font-size: 36px;
  font-weight: bold;
  color: $color-white;
  & > span {
    display: inline-block;
  }
}

.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: opacity $transition-slow;
}
.loading-fade-enter,
.loading-fade-leave-to {
  opacity: 0;
}

.loading-text-fade-enter-active,
.loading-text-fade-leave-active {
  transform: translateY(20px);
  transition: opacity $transition-fast, transform $transition-fast;
}
.loading-text-fade-enter,
.loading-text-fade-leave-to {
  opacity: 0;
}
</style>
