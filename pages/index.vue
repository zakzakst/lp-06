<template>
  <div class="page-container" ref="pageContainer">
    <global-header
      :links="globalLinks"
      :activeLink="globalLinkCurrent"
      :bgIsActive="headerBgIsActive"
      :menuIsActive="menuIsActive"
      @clickLink="scrollTo"
      @clickBtn="scrollTo('#form')"
      @clickMenuBtn="menuShow"
    />
    <global-menu
      :links="globalLinks"
      :activeLink="globalLinkCurrent"
      :isActive="menuIsActive"
      @clickLink="menuHideScroll"
      @hideLinks="menuHide"
    />
    <div class="hero">
      <div class="container position-relative">
        <div class="row">
          <div class="col-sm-6">
            <div class="hero__conetent" :class="{'is-animated': heroIsAnimated}">
              <h1 class="hero__title">タイトルが入ります</h1>
              <p class="hero__text">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
              <p class="hero__text">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
            </div>
          </div>
        </div>
        <div class="hero__img">
          <svg ref="svg" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="hero__img-mask" class="hero__img-mask">
                <path d="M 0 150 l 150 -150 l 150 150 l -150 150 l -150 -150 Z" />
              </mask>
            </defs>
            <foreignObject class="hero__img-wrapper" width="300" height="300" mask="url(#hero__img-mask)">
              <div class="hero__img-img"></div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
    <div ref="about" id="about" class="container py-5">
      <div ref="about1" class="row py-2">
        <div class="col-sm-4 d-flex align-items-center">
          <about-img
            :bgImg="aboutImg1"
            :isAnimated="aboutImg1IsAnimated"
          />
        </div>
        <div class="col-sm-8 d-flex align-items-center">
          <about-content
            direction="right"
            :isAnimated="aboutContent1IsAnimated"
          >
            <template v-slot:heading>テキストが入ります</template>
            <template v-slot:text>
              <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
              <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
            </template>
          </about-content>
        </div>
      </div>
      <div ref="about2" class="row py-2 flex-sm-row-reverse">
        <div class="col-sm-4 d-flex align-items-center">
          <about-img
            :bgImg="aboutImg2"
            :isAnimated="aboutImg2IsAnimated"
          />
        </div>
        <div class="col-sm-8 d-flex align-items-center">
          <about-content
            direction="left"
            :isAnimated="aboutContent2IsAnimated"
          >
            <template v-slot:heading>テキストが入ります</template>
            <template v-slot:text>
              <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
              <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
            </template>
          </about-content>
        </div>
      </div>
    </div>
    <section ref="feature" id="feature" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="feature__img" :class="{'is-animated': featureImgIsAnimated}">
              <img src="https://picsum.photos/id/5/400/300" class="shadow-lg rounded-lg" alt="">
            </div>
          </div>
          <div class="col-sm-6">
            <ul class="feature__items" :class="{'is-animated': featureItemsIsAnimated}">
              <li class="feature__item">テキストが入ります。テキストが入ります。テキストが入ります。</li>
              <li class="feature__item">テキストが入ります。テキストが入ります。</li>
              <li class="feature__item">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</h2>
        <p class="text-center mb-4">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
        <chart-items />
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">動画紹介</h2>
        <p class="text-center mb-4">テキストが入ります。テキストが入ります。テキストが入ります。</p>
        <video-item
          src="/works/lp-06/video/video.mp4"
          poster="/works/lp-06/video/video.png"
        />
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">多くの企業様に導入いただいてます</h2>
        <p class="text-center mb-2">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      </div>
      <logo-items />
    </section>
    <section ref="faq" id="faq" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">よくあるご質問</h2>
        <faq-items />
      </div>
    </section>
    <section ref="voices" id="voices" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">お客様の声</h2>
      </div>
      <voice-items />
    </section>
    <section id="form" class="bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">お問い合わせ</h2>
        <contact-form />
      </div>
    </section>
    <parallax-bg
      :parallax="`${parallaxBgMove}%`"
      :parallaxRate=0.005
      position="-10%"
      img="/works/lp-06/img/bg01.png"
    />
    <parallax-bg
      :parallax="`${parallaxBgMove}%`"
      :parallaxRate=0.015
      position="20%"
      img="/works/lp-06/img/bg02.png"
    />
    <parallax-bg
      :parallax="`${parallaxBgMove}%`"
      :parallaxRate=0.01
      position="110%"
      img="/works/lp-06/img/bg03.png"
    />
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalMenu from '@/components/GlobalMenu'
// import Hero from '@/components/Hero'
import AboutImg from '@/components/AboutImg'
import AboutContent from '@/components/AboutContent'
import ChartItems from '@/components/ChartItems'
import VideoItem from '@/components/VideoItem'
// import LogoItems from '@/components/LogoItems'
import LogoItems from '@/components/LogoItems2'
import FaqItems from '@/components/FaqItems'
import VoiceItems from '@/components/VoiceItems'
import ContactForm from '@/components/ContactForm'
import ParallaxBg from '@/components/ParallaxBg'

import MixinWindowFix from '@/mixins/windowFix'

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  data() {
    return {
      globalLinks: [
        {
          name: 'about',
          label: '○○について',
          path: '#about',
        },
        {
          name: 'feature',
          label: '特長',
          path: '#feature',
        },
        {
          name: 'faq',
          label: 'よくあるご質問',
          path: '#faq',
        },
        {
          name: 'voices',
          label: 'お客様の声',
          path: '#voices',
        },
      ],
      globalLinkCurrent: '',
      headerBgIsActive: false,
      menuIsActive: false,
      heroIsAnimated: false,
      aboutImg1: 'https://picsum.photos/id/1029/300/300',
      aboutImg1IsAnimated: false,
      aboutContent1IsAnimated: false,
      aboutImg2: 'https://picsum.photos/id/180/300/300',
      aboutImg2IsAnimated: false,
      aboutContent2IsAnimated: false,
      featureImgIsAnimated: false,
      featureItemsIsAnimated: false,
      parallaxBgMove: 0,
    }
  },
  components: {
    GlobalHeader,
    GlobalMenu,
    // Hero,
    AboutImg,
    AboutContent,
    ChartItems,
    VideoItem,
    LogoItems,
    FaqItems,
    VoiceItems,
    ContactForm,
    ParallaxBg,
  },
  mixins: [
    MixinWindowFix,
  ],
  methods: {
    scrollTo(path) {
      this.$scrollTo(path, {
        offset: -72,
      });
    },
    headerBgHandler(el) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top -50px',
        end: 'top -50px',
        onEnter: () => {
          this.headerBgIsActive = true;
        },
        onEnterBack: () => {
          this.headerBgIsActive = false;
        },
      });
    },
    headerLinkHandler(el) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 50%',
        end: 'top 50%',
        onEnter: () => {
          this.globalLinkCurrent = el.getAttribute('id');
        },
        onEnterBack: () => {
          this.globalLinkCurrent = el.getAttribute('id');
        },
      });
    },
    menuShow() {
      this.windowFix();
      this.menuIsActive = true;
    },
    menuHide() {
      this.windowFixClear();
      this.menuIsActive = false;
    },
    menuHideScroll(path) {
      this.windowFixClear();
      this.menuIsActive = false;
      this.scrollTo(path);
    },
    heroAnim() {
      this.heroIsAnimated = true;
    },
    aboutHandler() {
      ScrollTrigger.create({
        trigger: this.$refs.about1,
        start: "top 50%",
        onEnter: self => {
          this.aboutImg1IsAnimated = true;
          this.aboutContent1IsAnimated = true;
          self.kill();
        }
      });
      ScrollTrigger.create({
        trigger: this.$refs.about2,
        start: "top 50%",
        onEnter: self => {
          this.aboutImg2IsAnimated = true;
          this.aboutContent2IsAnimated = true;
          self.kill();
        }
      });
    },
    featureHandler() {
      ScrollTrigger.create({
        trigger: this.$refs.feature,
        start: "top 50%",
        onEnter: self => {
          this.featureImgIsAnimated = true;
          this.featureItemsIsAnimated = true;
          self.kill();
        }
      });
    },
    parallaxBgHandler() {
      gsap.to(this.$data, {
        scrollTrigger: {
          trigger: this.$refs.pageContainer,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
        parallaxBgMove: -10,
        ease: 'none',
      });
    }
  },
  mounted() {
    this.headerBgHandler(this.$refs.pageContainer);
    this.globalLinks.forEach(link => {
      this.headerLinkHandler(this.$refs[link.name]);
    });
    this.aboutHandler();
    this.featureHandler();
    this.parallaxBgHandler();
  },
  computed: {
    loadDone() {
      return this.$store.getters.loadDone;
    }
  },
  watch: {
    loadDone(newValue, oldValue) {
      if (newValue && !oldValue) {
        this.heroAnim();
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.page-container {
  position: relative;
  padding-top: 72px;
  overflow: hidden;
}
.hero__conetent {
  display: flex;
  // min-height: 400px;
  flex-direction: column;
  justify-content: center;
  &.is-animated {
    .hero__title,
    .hero__text {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @include mq(sm) {
    min-height: 400px;
  }
}
.hero__title,
.hero__text {
  font-family: 'Noto Serif JP', serif;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity $transition-default, transform $transition-default;
}
.hero__title {
  font-weight: bold;
  transition-delay: .1s;
}
.hero__text {
  transition-delay: .2s;
}
.hero__img {
  position: absolute;
  display: none;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
  z-index: -1;
  @include mq(sm) {
    display: block;
  }
}
.hero__img-mask {
  fill: #fff;
}
.hero__img-img {
  width: 300px;
  height: 300px;
  background: url(https://picsum.photos/id/1/600/600) no-repeat center center;
  background-size: cover;
}
.feature__img {
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity $transition-default, transform $transition-default;
  &.is-animated {
    opacity: 1;
    transform: translateY(0);
  }
  & > img {
    width: 100%;
  }
}
.feature__items {
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  &.is-animated {
    & > .feature__item {
      opacity: 1;
      transform: translateX(0);
      &:nth-child(1) {transition-delay: .6s;}
      &:nth-child(2) {transition-delay: .8s;}
      &:nth-child(3) {transition-delay: 1s;}
    }
  }
}
.feature__item {
  position: relative;
  margin-bottom: 16px;
  padding-left: 30px;
  font-size: 20px;
  opacity: 0;
  transform: translateX(20px);
  transition: opacity $transition-default, transform $transition-default;
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    top: 6px;
    left: 0;
    background: #000;
    transform: rotate(-45deg);
  }
}
</style>
