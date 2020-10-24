<template>
  <div class="voice-items">
    <client-only>
      <VueSlickCarousel v-bind="slickOptions">
        <div v-for="(item, index) in items" :key="index" class="voice-item__wrapper">
          <div class="voice-item shadow">
            <div class="voice-item__img">
              <img :src="item.img" alt="">
            </div>
            <div class="voice-item__content">
              <h3>{{ item.title }}</h3>
              <div v-html="item.content"></div>
            </div>
          </div>
        </div>
        <template v-slot:prevArrow>
          <div class="voice-items__prev-arrow">
            <prev-icon />
          </div>
        </template>
        <template v-slot:nextArrow>
          <div class="voice-items__next-arrow">
            <next-icon />
          </div>
        </template>
      </VueSlickCarousel>
    </client-only>
  </div>
</template>

<script>
import prevIcon from '@/static/bootstrap-icons/chevron-left.svg'
import nextIcon from '@/static/bootstrap-icons/chevron-right.svg'

export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '48px',
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      },
      items: [
        {
          img: 'https://picsum.photos/id/454/144/144',
          title: '1.タイトルが入ります',
          content: '<p>テキストが入ります。テキストが入ります。</p>',
        },
        {
          img: 'https://picsum.photos/id/455/144/144',
          title: '2.タイトルが入ります',
          content: '<p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p><p>テキストが入ります。テキストが入ります。</p>',
        },
        {
          img: 'https://picsum.photos/id/338/144/144',
          title: '3.タイトルが入ります',
          content: '<p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p><p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>',
        },
        {
          img: 'https://picsum.photos/id/342/144/144',
          title: '4.タイトルが入ります',
          content: '<p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>',
        },
        {
          img: 'https://picsum.photos/id/447/144/144',
          title: '5.タイトルが入ります',
          content: '<p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p><p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>',
        },
      ]
    }
  },
  components: {
    prevIcon,
    nextIcon,
  },
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.voice-items {
  .slick-slider {
    padding-bottom: 24px;
  }
  .slick-track {
    display: flex;
  }
  .slick-slide {
    height: auto;
    & > div {
      height: 100%;
    }
  }
  .slick-dots {
    bottom: 4px;
  }
}
.voice-items__prev-arrow,
.voice-items__next-arrow {
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: $color-white;
  transform: translateY(-40px);
  z-index: 1;
  &:hover {
    color: $color-white;
  }
  &::before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: $color-primary;
    transform: rotate(45deg);
    z-index: -1;
    transition: opacity $transition-fast;
  }
}
.voice-items__prev-arrow {
  left: 30px;
  padding-right: 4px;
}
.voice-items__next-arrow {
  right: 30px;
  padding-left: 4px;
}

.voice-item__wrapper {
  height: 100%;
  padding: 8px 8px 24px;
}
.voice-item {
  height: 100%;
  padding: 24px;
  background: $color-white;
  @include mq(md) {
    display: flex;
  }
}
.voice-item__img {
  width: 72px;
  height: 72px;
  margin: 0 auto 16px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  background: $color-placeholder;
  @include mq(md) {
    margin: 0 16px 0 0;
  }
  & > img {
    width: 100%;
  }
}
</style>
