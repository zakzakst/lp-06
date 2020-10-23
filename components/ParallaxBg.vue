<template>
  <div class="parallax-bg" :style="style"></div>
</template>

<script>
export default {
  props: ['parallax', 'parallaxRate', 'position', 'img'],
  computed: {
    style() {
      return {
        bottom: `${-100 * (1 + this.parallaxRate)}%`,
        backgroundImage: `url(${this.img})`,
        backgroundPositionX: this.position,
        transform: `translateY(${this.parallax})`,
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.parallax-bg {
  position: absolute;
  top: 0;
  // bottom: -100%;
  left: 0;
  right: 0;
  background: repeat-y top center;
  z-index: $z-parallax-bg;
}
</style>
