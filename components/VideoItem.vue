<template>
  <div class="video-item">
    <video
      ref="player"
      :preload="options.preload"
      :muted="options.muted"
      :controls="options.controls"
      @loadeddata="init"
    >
      <source :src="src" type="video/mp4">
      <p>video要素がサポートされていないブラウザでご覧になっています。</p>
    </video>
    <transition name="overlay-fade" @after-leave="play">
      <div
        v-if="overlayIsActive"
        class="video-item__overlay"
        @click="hideOverlay"
        :style="{backgroundImage: `url(${poster})`}"
      >
        <template v-if="isReady"><play-icon /></template>
        <template v-else><load-icon class="video-item__overlay-loading" /></template>
      </div>
    </transition>
  </div>
</template>

<script>
import LoadIcon from '@/static/bootstrap-icons/arrow-repeat.svg'
import PlayIcon from '@/static/bootstrap-icons/caret-right-square-fill.svg'

export default {
  props: ['src', 'poster'],
  data() {
    return {
      player: null,
      isReady: false,
      overlayIsActive: true,
      // src: '/works/lp-06/video/video.mp4',
      // poster: '/works/lp-06/video/video.png',
      options: {
        preload: 'auto',
        muted: true,
        controls: true,
      }
    }
  },
  components: {
    PlayIcon,
    LoadIcon,
  },
  methods: {
    init() {
      this.player = this.$refs.player;
      this.isReady = true;
    },
    play() {
      this.player.play();
    },
    hideOverlay() {
      if (this.isReady) {
        this.overlayIsActive = false;
      }
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.video-item {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  & > video {
    width: 100%;
  }
}
.video-item__overlay {
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  color: $color-white;
  font-size: 36px;
  background: center center no-repeat;
  background-color: $color-black;
  background-size: cover;
  filter: grayscale(1);
  cursor: pointer;
  transition: filter $transition-default;
  &:hover {
    filter: grayscale(0);
  }
}
.video-item__overlay-loading {
  animation: overlayLoading 2s linear infinite;
}
@keyframes overlayLoading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity $transition-default;
}
.overlay-fade-enter,
.overlay-fade-leave-to {
  opacity: 0;
}
</style>
