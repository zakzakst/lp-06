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
    <!-- <div style="height: 1000px"></div>
    <button @click="test">test</button> -->
    <!-- <div class="container">
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
    </div> -->
    <!-- <section ref="feature">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="feature__img" :class="{'is-animated': featureImgIsAnimated}">
              <img src="https://picsum.photos/id/237/400/300" class="shadow-lg rounded-lg" width="400" height="300" alt="">
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
      <button @click="test">test</button>
    </section> -->
    <!-- <section>
      <div class="container">
        <h2 class="text-center mb-4">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</h2>
        <p class="text-center mb-4">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
        <chart-items />
      </div>
    </section> -->
    <!-- <section>
      <div class="container">
        <h2 class="text-center mb-4">多くの企業様に導入いただいてます</h2>
        <p class="text-center mb-2">テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      </div>
      <logo-items />
    </section> -->
    <!-- <section>
      <div class="container">
        <h2 class="text-center mb-4">よくあるご質問</h2>
        <faq-items />
      </div>
    </section> -->
    <!-- <section>
      <div class="container">
        <h2 class="text-center mb-4">お客様の声</h2>
      </div>
      <voice-items />
    </section> -->
    <!-- <section id="form">
      <div class="container">
        <h2 class="text-center mb-4">お問い合わせ</h2>
        <contact-form />
      </div>
    </section> -->

    <div style="height: 1000px" ref="link1" class="linkChange" id="link1">
      link1
    </div>
    <div style="height: 1000px" ref="link2" class="linkChange" id="link2">
      link2
    </div>
    <div style="height: 1000px" ref="link3" class="linkChange" id="link3">
      link3
    </div>
    <parallax-bg
      :parallax="`${parallaxBgMove}%`"
      :parallaxRate=0.7
      position="-10%"
      img="/img/bg01.png"
    />
    <parallax-bg
      :parallax="`${parallaxBgMove}%`"
      :parallaxRate=2
      position="20%"
      img="/img/bg02.png"
    />
    <parallax-bg
      :parallax="`${parallaxBgMove}%`"
      :parallaxRate=0.2
      position="110%"
      img="/img/bg03.png"
    />
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalMenu from '@/components/GlobalMenu'
import AboutImg from '@/components/AboutImg'
import AboutContent from '@/components/AboutContent'
import ChartItems from '@/components/ChartItems'
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
          name: 'link1',
          label: 'リンク1',
          path: '#link1',
        },
        {
          name: 'link2',
          label: 'リンク2',
          path: '#link2',
        },
        {
          name: 'link3',
          label: 'リンク3',
          path: '#link3',
        },
      ],
      globalLinkCurrent: '',
      headerBgIsActive: false,
      menuIsActive: false,
      aboutImg1: 'https://picsum.photos/id/237/144/144',
      aboutImg1IsAnimated: false,
      aboutContent1IsAnimated: false,
      aboutImg2: 'https://picsum.photos/id/238/144/144',
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
    AboutImg,
    AboutContent,
    ChartItems,
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
    test() {
      console.log('test');
      this.aboutImg1IsAnimated = true;
      this.aboutContent1IsAnimated = true;
      this.aboutImg2IsAnimated = true;
      this.aboutContent2IsAnimated = true;
    },
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
        parallaxBgMove: -50,
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
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.page-container {
  position: relative;
  padding-top: 72px;
  overflow: hidden;
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
