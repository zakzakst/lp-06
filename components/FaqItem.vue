<template>
  <dl class="faq-item">
    <dt class="faq-item__question">
      <div class="faq-item__question-icon">Q</div>
      <div class="faq-item__question-content" v-html="question"></div>
      <div class="faq-item__question-btn-wrapper">
        <button v-if="!answerIsActive" @click="showAnswer" class="faq-item__question-btn">
          <show-icon />
        </button>
        <button v-else @click="hideAnswer" class="faq-item__question-btn">
          <hide-icon />
        </button>
      </div>
    </dt>
    <transition
      name="answer"
      @before-enter="answerBeforeEnter"
      @enter="answerEnter"
      @before-leave="answerBeforeLeave"
      @leave="answerLeave"
    >
      <dd v-if="answerIsActive" class="faq-item__answer-wrapper">
        <div class="faq-item__answer">
          <div class="faq-item__answer-icon">A</div>
          <div class="faq-item__answer-content" v-html="answer"></div>
        </div>
      </dd>
    </transition>
  </dl>
</template>

<script>
import showIcon from '@/static/bootstrap-icons/plus.svg'
import hideIcon from '@/static/bootstrap-icons/dash.svg'

export default {
  props: ['question', 'answer'],
  data() {
    return {
      answerIsActive: false,
    }
  },
  components: {
    showIcon,
    hideIcon,
  },
  methods: {
    showAnswer() {
      this.answerIsActive = true;
    },
    hideAnswer() {
      this.answerIsActive = false;
    },
    answerBeforeEnter(el) {
      el.style.height = '0';
    },
    answerEnter(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    answerBeforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    answerLeave(el) {
      el.style.height = '0';
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.faq-item {
  margin: 0;
}
.faq-item__question {
  position: relative;
  padding: 12px 48px;
}
.faq-item__question-icon,
.faq-item__answer-icon {
  position: absolute;
  display: flex;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 8px;
  padding-bottom: 2px;
  justify-content: center;
  align-items: center;
  color: $color-white;
  z-index: 1;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: rotate(-45deg);
    z-index: -1;
  }
}
.faq-item__question-icon {
  &::before {
    background: $color-primary;
  }
}
.faq-item__question-btn-wrapper {
  position: absolute;
  width: 48px;
  height: 48px;
  top: 0;
  right: 0;
}
.faq-item__question-btn {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  &:focus {
    outline: none;
  }
}
.faq-item__answer-wrapper {
  margin: 0;
  overflow: hidden;
  transition: height $transition-default;
}
.faq-item__answer {
  position: relative;
  padding: 12px 48px;
}
.faq-item__answer-icon {
  &::before {
    background: $color-secondary;
  }
}
</style>
