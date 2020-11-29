<template>
  <div class="main-content">
    <div class="main-content-inner">
      <div class="title">新歌首发</div>
      <div class="tab-box">
        <span class="latest">
          <a @click="handleClick('latest')">最新</a>
        </span>
        <span class="mainland">
          <a @click="handleClick('mainland')">内地</a>
        </span>
        <span class="hongkong">
          <a @click="handleClick('hongkong')">港台</a>
        </span>
        <span class="europe">
          <a @click="handleClick('europe')">欧美</a>
        </span>
        <span class="korea">
          <a @click="handleClick('korea')">韩国</a>
        </span>
        <span class="japan">
          <a @click="handleClick('japan')">日本</a>
        </span>
      </div>
    </div>
    <Slider
      v-if="activeName === 'recommend'"
      :options="options"
      :sliders="sliders"
      :type="newSongs"
    ></Slider>
  </div>
</template>

<script>
import Slider from '@/components/Slider';

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
          imgName: '../assets/swiper1.jpg',
          play: 300.5,
        },
        {
          name: 'Flowers',
          description: '经典华语 | 时光已祛，光辉难褪',
          btnName: '下载',
          imgName: '../assets/swiper2.jpg',
          play: 545.7,
        },
        {
          name: '周杰伦',
          description: '我落泪情绪零碎，周杰伦',
          btnName: '下载',
          imgName: '../assets/swiper3.jpg',
          play: 3095.5,
        },
        {
          name: 'Singer2',
          description: '经典老歌｜那些逝去的青春',
          btnName: '下载',
          imgName: '../assets/swiper4.jpg',
          play: 291.6,
        },
        {
          name: '张国荣',
          description: '岁月留声：80年代经典粤语',
          btnName: '下载',
          imgName: '../assets/swiper5.jpg',
          play: 600.6,
        },
      ],
    };
  },
  methods: {
    handleClick() {},
  },
};
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
.latest {
  font-size: 14px;
  margin: 0 20px;
}
.mainland {
  font-size: 14px;
  margin: 0 20px;
}
.hongkong {
  font-size: 14px;
  margin: 0 20px;
}
.europe {
  font-size: 14px;
  margin: 0 20px;
}
.korea {
  font-size: 14px;
  margin: 0 20px;
}
.japan {
  font-size: 14px;
  margin: 0 20px;
}
a:hover {
  color: #409eff;
  cursor: pointer;
}
</style>
