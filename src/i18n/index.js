import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import ua from './ua'

Vue.use(VueI18n)

const messages = {
  en,
  ua
}

const i18n = new VueI18n({
  locale: 'ua',
  messages
})

export default i18n
