<template>
  <div>
    <validation-observer ref="observer" v-slot="{ invalid }" immediate>
      <validation-provider v-slot="{ errors, valid }" rules="required" name="氏名">
        <div class="mb-3">
          <label class="form-label">氏名 <span class="badge rounded-pill bg-secondary">必須</span></label>
          <input
            v-model="name"
            data-vv-validate-on="change"
            type="text"
            class="form-control"
            :class="{'is-valid': valid, 'is-invalid': errors.length}"
          >
          <p v-show="valid && name.length" class="valid-feedback">入力済</p>
          <p v-show="errors.length" class="invalid-feedback">
            {{ errors[0] }}
          </p>
        </div>
      </validation-provider>
      <validation-provider v-slot="{ errors, valid }" rules="email|required" name="メールアドレス">
        <div class="mb-3">
          <label class="form-label">メールアドレス <span class="badge rounded-pill bg-secondary">必須</span></label>
          <input
            v-model="email"
            data-vv-validate-on="change"
            type="email"
            class="form-control"
            :class="{'is-valid': valid, 'is-invalid': errors.length}"
          >
          <p v-show="valid" class="valid-feedback">入力済</p>
          <p v-show="errors.length" class="invalid-feedback">
            {{ errors[0] }}
          </p>
        </div>
      </validation-provider>
      <validation-provider v-slot="{ errors, valid }" rules="required" name="内容">
        <div class="mb-3">
          <label class="form-label">内容 <span class="badge rounded-pill bg-secondary">必須</span></label>
          <textarea
            v-model="text"
            data-vv-validate-on="change"
            type="text"
            class="form-control"
            :class="{'is-valid': valid, 'is-invalid': errors.length}"
          ></textarea>
          <p v-show="valid" class="valid-feedback">入力済</p>
          <p v-show="errors.length" class="invalid-feedback">
            {{ errors[0] }}
          </p>
        </div>
      </validation-provider>
      <div class="mb-3 form-check">
        <input v-model="term" type="checkbox" class="form-check-input" :class="{'is-valid': term}">
        <label class="form-check-label">利用規約に同意する</label>
        <div class="form-text">利用規約の内容は<a href="#" @click.prevent="showTerm"> こちら </a>をご確認ください</div>
      </div>
      <div>
        <button
          @click="submit"
          :disabled="invalid || !term"
          class="contact-form__btn"
        >送信</button>
      </div>
    </validation-observer>
    <modal :isActive="termModalIsActive" @close="hideTerm">
      <h2>利用規約</h2>
      <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
      <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import MixinWindowFix from '@/mixins/windowFix'

export default {
  data() {
    return {
      name: '',
      email: '',
      text: '',
      term: false,
      termModalIsActive: false,
      cookieOptions: {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      },
    }
  },
  components: {
    Modal,
  },
  mixins: [
    MixinWindowFix,
  ],
  methods: {
    submit() {
      this.$refs.observer.validate().then(result => {
        if (result) {
          const valText = `氏名：${this.name}\nメールアドレス：${this.email}\n内容：${this.text}`;
          alert(valText);
          this.setCookies();
        }
      });
    },
    showTerm() {
      this.windowFix();
      this.termModalIsActive = true;
    },
    hideTerm() {
      this.windowFixClear();
      this.termModalIsActive = false;
    },
    getCookies() {
      const cookies = this.$cookies.getAll();
      return cookies;
    },
    setFormValue() {
      const cookies = this.getCookies();
      this.name = cookies.name;
      this.email = cookies.email;
      this.text = cookies.text;
      this.term = cookies.term;
    },
    setCookies() {
      const cookies = [
        { name: 'name', value: this.name, opts: this.cookieOptions },
        { name: 'email', value: this.email, opts: this.cookieOptions },
        { name: 'text', value: this.text, opts: this.cookieOptions },
        { name: 'term', value: this.term, opts: this.cookieOptions },
      ]
      this.$cookies.setAll(cookies);
    },
  },
  created() {
    this.setFormValue();
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/base/variables";

.contact-form__btn {
  display: block;
  min-width: 300px;
  margin: 16px auto 0;
  padding: 12px;
  color: $color-white;
  background: $color-primary;
  border: none;
  &:focus {
    outline: none;
  }
  &:disabled {
    background: $color-disabled;
  }
}
</style>
