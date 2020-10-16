<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, idx) in sliderLists" :key="idx + '_slider'">
        <div class="title">{{ item.name }}</div>
        <div class="desc">{{ item.description }}</div>
        <el-button
          type=""
          class="download-wrapper"
          icon="el-icon-search"
        ></el-button>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev" v-if="isPrev"></div>
      <div class="swiper-button-next" slot="button-next" v-if="isNext"></div>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  width: 1200px;
  /* .swiper-slide {
  } */
}
.title {
  font-size: 15px;
  line-height: 1.5;
  font-weight: bold;
}
.desc {
  font-size: 15px;
  line-height: 1.5;
  margin: 5px 0 20px;
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
.video-bg {
  width: 255px;
  height: 143px;
  display: block;
  margin-bottom: 20px;
}
</style>

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
        speed: 6000,
        slidesPerView: 2,
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
  },
  methods: {},
}
</script>
>
