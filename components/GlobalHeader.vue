<template>
  <div class="header__wrapper" id="global-header" :class="{'is-active--bg': bgIsActive, 'is-active--menu': menuIsActive}">
    <div class="container">
      <div class="header">
        <div class="header__logo">
          <img src="/img/logo.png" alt="LOGO">
        </div>
        <ul class="header__links">
          <li v-for="link in links" :key="link.label">
            <a
              href="#"
              @click.prevent="clickLink(link.path)"
              class="header__links-item"
              :class="{'is-active': link.name === activeLink}"
            >
              <links-icon class="header__links-icon" />{{ link.label }}
            </a>
          </li>
        </ul>
        <button @click.prevent="clickBtn" class="header__btn ml-auto">お問合せ</button>
        <button @click.prevent="clickMenuBtn" class="header__menu-btn">
          <menu-icon v-if="!menuIsActive" />
          <close-icon v-else />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import linksIcon from '@/static/bootstrap-icons/caret-down-fill.svg'
import menuIcon from '@/static/bootstrap-icons/list.svg'
import closeIcon from '@/static/bootstrap-icons/x.svg'

export default {
  props: ['links', 'activeLink', 'bgIsActive', 'menuIsActive'],
  components: {
    linksIcon,
    menuIcon,
    closeIcon,
  },
  methods: {
    clickLink(path) {
      this.$emit('clickLink', path);
    },
    clickBtn() {
      this.$emit('clickBtn');
    },
    clickMenuBtn() {
      this.$emit('clickMenuBtn');
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.header {
  display: flex;
  align-items: center;
}
.header__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px 0 12px;
  transition: background 1s;
  z-index: $z-header;
  &.is-active--bg {
    background: rgba(255, 255, 255, .85);
  }
  // &.is-active--menu {
  //   background: rgba(255, 255, 255, 1);
  // }
}
.header__logo {
  height: 48px;
  img {
    height: 100%;
  }
}
.header__links {
  display: none;
  margin: 0 0 0 16px;
  padding: 0;
  list-style: none;
  @include mq(md) {
    display: flex;
  }
}
.header__links-item {
  padding: 0 8px;
  color: $color-text--default;
  text-decoration: none;
  &.is-active {
    color: $color-text--active;
  }
}
.header__links-icon {
  width: 12px;
  height: 12px;
  margin: 0 2px 2px 0;
}
.header__btn {
  height: 48px;
  line-height: 48px;
  padding: 0 12px;
  color: $color-white;
  background: $color-primary;
  border: none;
}
.header__menu-btn {
  display: flex;
  width: 48px;
  height: 48px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  background: $color-white;
  border: solid 1px $color-primary;
  @include mq(md) {
    display: none;
  }
}
</style>
