<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, idx) in sliderLists" :key="idx + '_second'">
        <div class="img mb-30" :class="getClassName(item.imgName)"></div>
        <div class="img mb-30" :class="getClassName(item.secondImg)"></div>
        <div class="img" :class="getClassName(item.thirdImg)"></div>
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
        slidesPerView: 6,
        slidesPerGroup: 6,
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
.mb-30 {
  margin-bottom: 30px;
}
.slider1 {
  background-image: url(../assets/mainland/slider1.jpg);
}
.slider2 {
  background-image: url(../assets/mainland/slider2.jpg);
}
.slider3 {
  background-image: url(../assets/mainland/slider3.jpg);
}
.slider4 {
  background-image: url(../assets/mainland/slider4.jpg);
}
.slider5 {
  background-image: url(../assets/mainland/slider5.jpg);
}
.slider6 {
  background-image: url(../assets/mainland/slider6.jpg);
}
.slider7 {
  background-image: url(../assets/mainland/slider7.jpg);
}
.slider8 {
  background-image: url(../assets/mainland/slider8.jpg);
}
.slider9 {
  background-image: url(../assets/mainland/slider9.jpg);
}
.swiper {
  height: 470px;
  width: 1200px;
  margin-bottom: 60px;
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
  margin-bottom: 5px;
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
  width: 100px;
  height: 100px;
  display: block;
}
</style>
