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
    <section>
      <div class="container">
        <h2 class="text-center mb-4">よくあるご質問</h2>
        <faq-Items />
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="text-center mb-4">お客様の声</h2>
      </div>
      <voice-Items />
    </section>
    <div style="height: 1000px"></div>
    <div style="height: 1000px" ref="link1" class="linkChange" id="link1">
      link1
    </div>
    <div style="height: 1000px" ref="link2" class="linkChange" id="link2">
      link2
    </div>
    <div style="height: 1000px" ref="link3" class="linkChange" id="link3">
      link3
    </div>
    <!-- <div class="row">
      <div class="col-sm">
        One of three columns
      </div>
      <div class="col-sm">
        One of three columns
      </div>
      <div class="col-sm">
        One of three columns
      </div>
    </div> -->
    <div id="form" style="height: 1000px">
      form
    </div>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalMenu from '@/components/GlobalMenu'
import FaqItems from '@/components/FaqItems'
import VoiceItems from '@/components/VoiceItems'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  data() {
    return {
      windowFixTargetIdList: [
        'global-header'
      ],
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
    }
  },
  components: {
    GlobalHeader,
    GlobalMenu,
    FaqItems,
    VoiceItems,
  },
  methods: {
    test() {
      console.log('test')
    },
    windowFix() {
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.paddingRight = `${scrollBarWidth}px`;
      this.windowFixTargetIdList.forEach(targetId => {
        document.getElementById(targetId).style.paddingRight = `${scrollBarWidth}px`;
      });
    },
    windowFixClear() {
      document.documentElement.style.overflow = null;
      document.documentElement.style.paddingRight = null;
      this.windowFixTargetIdList.forEach(targetId => {
        document.getElementById(targetId).style.paddingRight = null;
      });
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
    }
  },
  mounted() {
    this.headerBgHandler(this.$refs.pageContainer);
    this.globalLinks.forEach(link => {
      this.headerLinkHandler(this.$refs[link.name]);
    });
  },
}
</script>

<style>
.page-container {
  padding-top: 72px;
  background: #eee;
}
</style>
