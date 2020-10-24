<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, idx) in sliderLists" :key="idx + '_slider'">
        <!-- <img alt="Singer CDs" :src="getSrc(item)" class="image" /> -->
        <img alt="Music Logo" src="../assets/swiper3.jpg" class="image" />
        <!-- <div class="title">{{ item.name }}</div> -->
        <div class="desc">{{ item.description }}</div>
        <div class="play">播放量：{{ item.play }}万次</div>
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
      default: true,
    },
    isNext: {
      required: false,
      type: Boolean,
      default: true,
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
        speed: 6000,
        slidesPerView: 4,
        slidesPerGroup: 4,
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
  },
  methods: {
    getSrc(item) {
      return item.imgName
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 300px;
  margin-top: 80px;
  width: 1100px;
  padding: 0 200px;
}
.play {
  font-size: 12px;
  color: #aaaaaa;
  line-height: 1.5;
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
  /* background-color: #409eff; */
}
.brochure-bg {
  width: 255px;
  height: 130px;
  display: block;
  margin-bottom: 20px;
}
.image {
  width: 200px;
  height: 200px;
  display: block;
  margin-bottom: 20px;
}
</style>
