<template>
  <div class="container page-body">
    <global-header
      :links="headerLinks"
      :activeLink="headerActiveLink"
      :bgIsActive="bgIsActive"
      @clickLink="scrollTo"
      @clickBtn="scrollTo('#form')"
    />
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
    <div class="row">
      <div class="col-sm">
        One of three columns
      </div>
      <div class="col-sm">
        One of three columns
      </div>
      <div class="col-sm">
        One of three columns
      </div>
    </div>
    <div id="form" style="height: 1000px">
      form
    </div>
  </div>
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  data() {
    return {
      headerLinks: [
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
      headerActiveLink: '',
      bgIsActive: false,
    }
  },
  components: {
    GlobalHeader
  },
  methods: {
    scrollTo(path) {
      this.$scrollTo(path, {
        offset: -100,
      });
    },
    bgHandler() {
      ScrollTrigger.create({
        trigger: '.page-body',
        start: 'top -50px',
        end: 'top -50px',
        onEnter: () => {
          // console.log('enter');
          this.bgIsActive = true;
        },
        onEnterBack: () => {
          // console.log('enter back');
          this.bgIsActive = false;
        },
        // markers: true,
      });
    },
    linkHandler(el) {
      console.log(el);
      ScrollTrigger.create({
        // trigger: '.linkChange',
        trigger: el,
        start: 'top 50%',
        end: 'top 50%',
        onEnter: () => {
          // console.log('linkChange', el.getAttribute('id'));
          this.headerActiveLink = el.getAttribute('id');
        },
        onEnterBack: () => {
          // console.log('linkChange back', el.getAttribute('id'));
          this.headerActiveLink = el.getAttribute('id');
        },
        // markers: true,
      });
    }
  },
  mounted() {
    this.bgHandler();
    this.linkHandler(this.$refs.link1);
    this.linkHandler(this.$refs.link2);
    this.linkHandler(this.$refs.link3);
  },
}
</script>

<style>
</style>
