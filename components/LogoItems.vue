<template>
  <div class="logo-items">
    <client-only>
      <VueSlickCarousel v-bind="slickOptions">
        <div v-for="(item, index) in items" :key="index" class="logo-item">
          <div class="logo-item__img">
            <img :src="`/img/company-logo/${item.img}`" :alt="item.alt">
          </div>
        </div>
      </VueSlickCarousel>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        speed: 1000,
        // autoplaySpeed: 0,
        // cssEase: 'linear',
        // speed: 5000,
        swipe: false,
        variableWidth: true,
      },
      items: [
        {
          img: '01.png',
          alt: '会社01',
        },
        {
          img: '02.png',
          alt: '会社02',
        },
        {
          img: '03.png',
          alt: '会社03',
        },
        {
          img: '04.png',
          alt: '会社04',
        },
        {
          img: '05.png',
          alt: '会社05',
        },
        {
          img: '06.png',
          alt: '会社06',
        },
        {
          img: '07.png',
          alt: '会社07',
        },
        {
          img: '08.png',
          alt: '会社08',
        },
        {
          img: '09.png',
          alt: '会社09',
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.logo-items {
  .slick-track {
    display: flex;
  }
  .slick-slide {
    height: auto;
    & > div {
      height: 100%;
    }
  }
}
.logo-item {
  height: 100%;
  padding: 0 8px;
}
.logo-item__img {
  display: flex;
  height: 100%;
  align-items: center;
}
</style>
