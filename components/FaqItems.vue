<template>
  <div>
    <ul class="faq-items">
      <li v-for="(item, index) in items" :key="index">
        <faq-item
          :question="item.question"
          :answer="item.answer"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import FaqItem from '@/components/FaqItem'

export default {
  data() {
    return {
      items: [
        {
          question: 'Q1：テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
          answer: 'A1：テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
        },
        {
          question: 'Q2：テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
          answer: 'A2：テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
        },
        {
          question: 'Q3：テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
          answer: 'A3：テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
        },
      ],
    }
  },
  components: {
    FaqItem,
  },
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.faq-items {
  padding: 0;
  list-style: none;
  & > li {
    padding: 8px 0;
    border-bottom: 1px solid $color-black;
    &:first-child {
      border-top: 1px solid $color-black;
    }
  }
}
</style>
