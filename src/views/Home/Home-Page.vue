<template>
  <div class="main-content">
    <div class="main-content-inner">
      <div class="title">歌曲推荐</div>
      <div class="tab-box">
        <span class="recommend">
          <a @click="handleClick('recommend')">为你推荐</a>
        </span>
        <span class="netMusic">
          <a @click="handleClick('netMusic')">网络歌曲</a>
        </span>
        <span class="background">
          <a @click="handleClick('background')">背景音乐</a>
        </span>
        <span class="sad">
          <a @click="handleClick('sad')">伤感</a>
        </span>
        <span class="official">
          <a @click="handleClick('official')">官方歌单</a>
        </span>
        <span class="loveSongs">
          <a @click="handleClick('loveSongs')">情歌</a>
        </span>
      </div>
    </div>
    <Slider
      v-if="activeName === 'recommend'"
      :options="options"
      :sliders="sliders"
      :type="homePage"
    ></Slider>
  </div>
</template>

<script>
import Slider from '@/components/Slider'

export default {
  components: {
    Slider,
  },
  data() {
    return {
      activeName: 'recommend',
      options: {},
      sliders: [
        {
          name: 'Singer1',
          description: '「潮流音乐」感受时光从耳边划过',
          btnName: '下载',
          imgName: 'swiper1',
          play: 300.5,
        },
        {
          name: 'Flowers',
          description: '经典华语 | 时光已祛，光辉难褪',
          btnName: '下载',
          imgName: 'swiper2',
          play: 545.7,
        },
        {
          name: '周杰伦',
          description: '我落泪情绪零碎，周杰伦',
          btnName: '下载',
          imgName: 'swiper3',
          play: 3095.5,
        },
        {
          name: 'Singer2',
          description: '经典老歌｜那些逝去的青春',
          btnName: '下载',
          imgName: 'swiper4',
          play: 291.6,
        },
        {
          name: '张国荣',
          description: '岁月留声：80年代经典粤语',
          btnName: '下载',
          imgName: 'swiper5',
          play: 600.6,
        },
        {
          name: '陈奕迅',
          description: '岁月留声：80年代经典粤语',
          btnName: '下载',
          imgName: 'swiper6',
          play: 600.6,
        },
        {
          name: '李宗盛',
          description: '岁月留声：80年代经典粤语',
          btnName: '下载',
          imgName: 'swiper7',
          play: 600.6,
        },
      ],
    }
  },
  methods: {
    handleClick() {},
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  /* width: 1200px; */
  /* background-color: #ddd; */
}
.main-content-inner {
  margin: 0 auto;
}
.title {
  text-align: center;
  letter-spacing: 8px;
  font-weight: bold;
  font-size: 32px;
  width: 50%;
  padding-bottom: 20px;
  margin: auto;
}
.tab-box {
  margin: auto;
  padding-bottom: 30px;
  /* padding: 0 360px; */
}
.recommend {
  font-size: 14px;
  margin: 0 20px;
}
.netMusic {
  font-size: 14px;
  margin: 0 20px;
}
.background {
  font-size: 14px;
  margin: 0 20px;
}
.sad {
  font-size: 14px;
  margin: 0 20px;
}
.official {
  font-size: 14px;
  margin: 0 20px;
}
.loveSongs {
  font-size: 14px;
  margin: 0 20px;
}
a:hover {
  color: #409eff;
  cursor: pointer;
}
</style>
