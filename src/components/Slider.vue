<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, idx) in sliderLists" :key="idx + '_slider'">
        <div class="img" :class="getClassName(item.imgName)"></div>
        <div class="title">{{ item.name }}</div>
        <div class="desc">{{ item.description }}</div>
        <div class="play">{{ $t('home.play', [item.play]) }}</div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev" v-if="isPrev"></div>
      <div class="swiper-button-next" slot="button-next" v-if="isNext"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import _ from 'lodash'

export default {
  name: 'Swiper-multiple-slides',
  props: {
    type: {
      required: false,
      type: String,
    },
    options: {
      required: true,
      type: Object,
    },
    sliders: {
      required: true,
      type: Array,
    },
    isPrev: {
      required: false,
      type: Boolean,
      default: false,
    },
    isNext: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {}
  },
  computed: {
    swiperOption() {
      const options = {
        autoPlay: true,
        // speed: 6000,
        slidesPerView: 4,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            const activeColor = '#409EFF'
            const normalColor = '#C0C4CC'
            let color = ''
            let paginationStyle = ''
            let pageHtml = ''
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor
              } else {
                color = normalColor
              }
              paginationStyle = `background:${color};width:30px;height:3px;cursor:pointer;border-radius:0%;margin-right:5px;opacity:1;`
              pageHtml += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
            }
            return pageHtml
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
      const originOptions = _.merge(options, this.$props.options)
      return originOptions
    },
    sliderLists() {
      return this.$props.sliders
    },
    realType() {
      return this.$props.type
    },
  },
  methods: {
    getClassName(item) {
      return item
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper1 {
  background-image: url(../assets/swiper1.jpg);
}
.swiper2 {
  background-image: url(../assets/swiper2.jpg);
}
.swiper3 {
  background-image: url(../assets/swiper3.jpg);
}
.swiper4 {
  background-image: url(../assets/swiper4.jpg);
}
.swiper5 {
  background-image: url(../assets/swiper5.jpg);
}
.swiper6 {
  background-image: url(../assets/swiper6.jpg);
}
.swiper7 {
  background-image: url(../assets/swiper7.jpg);
}
.swiper8 {
  background-image: url(../assets/swiper8.jpg);
}
.swiper {
  height: 420px;
  width: 1100px;
}
.play {
  font-size: 12px;
  color: #aaaaaa;
  line-height: 1.5;
}
.title {
  font-size: 15px;
  line-height: 1.5;
  font-weight: 600;
}
.desc {
  font-size: 13px;
  line-height: 1.5;
  margin: 10px 0;
}
.desc:hover {
  color: #409eff;
  cursor: pointer;
}
.download-wrapper {
  padding: 0;
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px #aaaaaa;
}
.brochure-bg {
  width: 255px;
  height: 130px;
  display: block;
  margin-bottom: 20px;
}
.img {
  width: 275px;
  height: 265px;
  display: block;
  margin-bottom: 20px;
}
.swiper-pagination-custom {
  bottom: 20px;
}
</style>
