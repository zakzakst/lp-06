<template>
  <div class="logo-items__wrapper">
    <div>
      <div class="logo-items">
        <div v-for="(item, index) in itemsTwice" :key="index" class="logo-item">
          <img :src="`/img/company-logo/${item.img}`" :alt="item.alt">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        {
          img: '10.png',
          alt: '会社10',
        },
        {
          img: '11.png',
          alt: '会社11',
        },
        {
          img: '12.png',
          alt: '会社12',
        },
      ]
    }
  },
  computed: {
    itemsTwice() {
      return this.items.concat(this.items);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.logo-items__wrapper {
  overflow: hidden;
  & > div {
    width: fit-content;
  }
}
.logo-items {
  position: relative;
  display: flex;
  align-items: center;
  animation: logoSlide 20s linear infinite;
}
.logo-item {
  padding: 0 8px;
}
@keyframes logoSlide {
  0% {
    left: 0;
  }
  100% {
    left: -50%;
  }
}
</style>
