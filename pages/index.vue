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
    <div style="height: 1000px"></div>
    <section ref="feature">
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
    </section>
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
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalMenu from '@/components/GlobalMenu'
import ChartItems from '@/components/ChartItems'
import LogoItems from '@/components/LogoItems'
import FaqItems from '@/components/FaqItems'
import VoiceItems from '@/components/VoiceItems'
import ContactForm from '@/components/ContactForm'

import MixinWindowFix from '@/mixins/windowFix'

import { gsap } from "gsap";
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
      featureImgIsAnimated: false,
      featureItemsIsAnimated: false,
    }
  },
  components: {
    GlobalHeader,
    GlobalMenu,
    ChartItems,
    LogoItems,
    FaqItems,
    VoiceItems,
    ContactForm,
  },
  mixins: [
    MixinWindowFix,
  ],
  methods: {
    test() {
      // console.log('test')
      this.featureImgIsAnimated = true;
      this.featureItemsIsAnimated = true;
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
    }
  },
  mounted() {
    this.headerBgHandler(this.$refs.pageContainer);
    this.globalLinks.forEach(link => {
      this.headerLinkHandler(this.$refs[link.name]);
    });
    this.featureHandler();
  },
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.page-container {
  padding-top: 72px;
  background: #eee;
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
