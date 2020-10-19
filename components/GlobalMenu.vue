<template>
  <transition name="menu-fade" @after-enter="showLinks">
    <div class="menu" v-if="isActive">
      <ul ref="menuLinks" class="menu__links">
        <li v-for="link in links" :key="link.label">
          <a
            href="#"
            @click.prevent="clickLink(link.path)"
            class="menu__links-item"
            :class="{'is-active': link.name === activeLink}"
          >
            {{ link.label }}<links-icon class="menu__links-icon" />
          </a>
        </li>
      </ul>
      <div ref="menuClose" class="menu__close">
        <button
          @click="hideLinks('hideLinks')"
          class="menu__close-btn"
        >
          <close-icon />閉じる
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import linksIcon from '@/static/bootstrap-icons/caret-down-fill.svg'
import closeIcon from '@/static/bootstrap-icons/x.svg'
import { gsap } from "gsap";

export default {
  props: ['links', 'activeLink', 'isActive'],
  components: {
    linksIcon,
    closeIcon,
  },
  methods: {
    clickLink(path) {
      this.hideLinks('clickLink', path);
    },
    showLinks() {
      const links = this.$refs.menuLinks;
      const close = this.$refs.menuClose;
      gsap.to([links.children, close], {
        duration: .5,
        y: 0,
        autoAlpha: 1,
        stagger: {
          each: .1
        }
      });
    },
    hideLinks(callbackName, path = '') {
      const links = this.$refs.menuLinks;
      const close = this.$refs.menuClose;
      const self = this;
      gsap.to([links.children, close], {
        duration: .5,
        y: 20,
        autoAlpha: 0,
        stagger: {
          each: .1,
          from: 'end',
        },
        onComplete() {
          self.$emit(callbackName, path);
        }
      });
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $color-overlay;
  z-index: $z-menu;
  @include mq(md) {
    display: none;
  }
}
.menu__links {
  width: 100%;
  max-width: 300px;
  margin: 0 0 24px;
  padding: 8px;
  list-style: none;
  & > li {
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    &:last-child > .menu__links-item {
      border-bottom: none;
    }
  }
}
.menu__links-item {
  display: flex;
  justify-content: space-between;
  padding: 12px 8px;
  font-size: 20px;
  color: $color-white;
  text-decoration: none;
  border-bottom: 1px dotted $color-white;
  &.is-active {
    color: $color-text--active;
  }
}
.menu__close {
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
}
.menu__close-btn {
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  color: $color-white;
  background: none;
  border: 1px solid $color-white;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity .5s ease;
}
.menu-fade-enter,
.menu-fade-leave-to {
  opacity: 0;
}
</style>
