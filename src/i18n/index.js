import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import zh from './zh-CN.json'
import en from './en-US.json'

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh,
    en,
  },
})

export default i18n
