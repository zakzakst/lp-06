<template>
  <div class="header__wrapper" :class="{'is-active': bgIsActive}">
    <div class="container">
      <div class="header">
        <div class="header__logo">LOGO</div>
        <ul class="header__links mr-auto">
          <li v-for="link in links" :key="link.label">
            <a
              href="#"
              @click.prevent="clickLink(link.path)"
              class="header__links-item"
              :class="{'is-active': link.name === activeLink}"
            >
              <links-icon class="header__links-icon" />
              {{ link.label }}
            </a>
          </li>
        </ul>
        <div class="header__button">
          <button @click.prevent="clickBtn">button</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import linksIcon from '@/static/bootstrap-icons/caret-down-fill.svg'

export default {
  props: ['links', 'activeLink', 'bgIsActive'],
  components: {
    linksIcon
  },
  methods: {
    clickLink(path) {
      this.$emit('clickLink', path);
    },
    clickBtn() {
      this.$emit('clickBtn');
    }
  },
}
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
}
.header__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: background 1s;
  &.is-active {
    background: #888;
  }
}
.header__links-item {
  &.is-active {
    color: #000;
  }
}
.header__links-icon {
  width: 30px;
  height: 30px;
}
</style>
