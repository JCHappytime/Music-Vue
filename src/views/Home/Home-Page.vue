<template>
  <div class="main-content">
    <div class="main-content-inner">
      <div>
        <div class="title">{{ $t('home.songs') }}</div>
        <div class="tab-box">
          <span class="recommend">
            <a @click="handleClick('recommend')">{{ $t('home.you') }}</a>
          </span>
          <span class="netMusic">
            <a @click="handleClick('netMusic')">{{ $t('home.netSongs') }}</a>
          </span>
          <span class="background">
            <a @click="handleClick('background')">
              {{ $t('home.background') }}
            </a>
          </span>
          <span class="sad">
            <a @click="handleClick('sad')">{{ $t('home.sad') }}</a>
          </span>
          <span class="official">
            <a @click="handleClick('official')">{{ $t('home.officical') }}</a>
          </span>
          <span class="loveSongs">
            <a @click="handleClick('loveSongs')">{{ $t('home.loveSongs') }}</a>
          </span>
        </div>
        <Slider
          v-if="activeName === 'recommend'"
          :options="options"
          :sliders="sliders"
          :type="homePage"
        ></Slider>
      </div>
      <div class="second">
        <div class="title">新歌首发</div>
        <div class="tab-box">
          <el-button type="primary" icon="el-icon-caret-right" class="play">
            播放全部
          </el-button>
          <span class="recommend">
            <a @click="handleClick('latest')">最新</a>
          </span>
          <span class="netMusic">
            <a @click="handleClick('mainLand')">内地</a>
          </span>
          <span class="background">
            <a @click="handleClick('hongkong')"> 港台 </a>
          </span>
          <span class="sad">
            <a @click="handleClick('europe')">欧美</a>
          </span>
          <span class="official">
            <a @click="handleClick('korea')">韩国</a>
          </span>
          <span class="loveSongs">
            <a @click="handleClick('japan')">日本</a>
          </span>
        </div>
        <Slider
          v-if="newName === 'latest'"
          :options="options"
          :sliders="sliders"
          :type="homePage"
        ></Slider>
      </div>
    </div>
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
      newName: 'latest',
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
  font-weight: bold;
  font-size: 32px;
  width: 50%;
  padding-bottom: 20px;
  margin: auto;
}
.tab-box {
  margin: auto;
  padding-bottom: 30px;
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
.second {
  padding-top: 20px;
}
.play {
  float: left;
}
</style>
