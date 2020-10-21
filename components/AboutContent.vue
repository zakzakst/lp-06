<template>
  <div class="about" :class="`about--to-${direction}`">
    <h2 ref="heading" class="about__heading">
      <slot name="heading" />
    </h2>
    <div ref="text" class="about__text">
      <slot name="text" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap"

export default {
  props: ['direction', 'isAnimated'],
  data() {
    return {
    }
  },
  methods: {
    splitText() {
      const heading = this.$refs.heading;
      heading.innerHTML = heading.textContent.replace(/(.)/g, '<span>$1</span>');
    },
    showContent() {
      const heading = this.$refs.heading;
      const text = this.$refs.text;
      // TODO: 左アニメーションの時に、見出しを後ろの文字から変化させる挙動が上手くいかない
      // const from = this.direction === 'left' ? 'end' : 'start';
      // console.log(from);
      const tl = gsap.timeline();
      tl
        .set(heading, {
          autoAlpha: 1,
        })
        .to(heading.children, {
          duration: .5,
          opacity: 1,
          x: 0,
          ease: 'power2.out',
          stagger: {
            each: .05,
            ease: 'power1.in',
            // form: from,
          },
        })
        .to(text, {
          duration: .7,
          autoAlpha: 1,
          x: 0,
          ease: 'power2.out',
        }, '-=.3');
    }
  },
  mounted() {
    this.splitText();
  },
  watch: {
    isAnimated(newState, oldState) {
      if (newState && !oldState) {
        this.showContent();
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";
$about-transform: -20px;

.about {
  overflow: hidden;
}
.about__heading {
  color: $color-primary;
  font-size: 32px;
  font-weight: bold;
  opacity: 0;
  visibility: hidden;
  & > span {
    display: inline-block;
    opacity: 0;
    // transform: translateX(-20px);
  }
}
.about__text {
  opacity: 0;
  visibility: hidden;
  // transform: translateX(-20px);
}
.about--to-left {
  text-align: left;
  @include mq(sm) {
    text-align: right;
  }
  & > .about__heading {
    & > span {
      transform: translateX($about-transform);
    }
  }
  & > .about__text {
    transform: translateX($about-transform);
  }
}
.about--to-right {
  text-align: left;
  & > .about__heading {
    & > span {
      // 一旦方向でのアニメーション変更保留
      // transform: translateX(-($about-transform));
      transform: translateX($about-transform);
    }
  }
  & > .about__text {
    // 一旦方向でのアニメーション変更保留
    // transform: translateX(-($about-transform));
    transform: translateX($about-transform);
  }
}
</style>
