<template>
  <div>
    <section class="main-content">
      <div class="main-content-inner">
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
          :type="'homePage'"
        ></Slider>
        <!-- <hr class="hr-wrap" /> -->
      </div>
    </section>
    <section>
      <div class="second">
        <div class="title">{{ $t('home.newSongs') }}</div>
        <div class="tab-box">
          <el-button type="primary" icon="el-icon-caret-right" class="play">
            {{ $t('home.playAll') }}
          </el-button>
          <span class="recommend">
            <a @click="handleClick('latest')">{{ $t('home.latest') }}</a>
          </span>
          <span class="netMusic">
            <a @click="handleClick('mainLand')">{{ $t('home.mainLand') }}</a>
          </span>
          <span class="background">
            <a @click="handleClick('hongkong')">{{ $t('home.hongkong') }}</a>
          </span>
          <span class="sad">
            <a @click="handleClick('europe')">{{ $t('home.europe') }}</a>
          </span>
          <span class="official">
            <a @click="handleClick('korea')">{{ $t('home.korea') }}</a>
          </span>
          <span class="loveSongs">
            <a @click="handleClick('japan')">{{ $t('home.japan') }}</a>
          </span>
        </div>
        <Second-Slider
          v-if="newName === 'latest'"
          :options="options"
          :sliders="secondSliders"
          :type="'homePage'"
        ></Second-Slider>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import SecondSlider from '@/components/Second-Slider'

export default {
  components: {
    Slider,
    SecondSlider,
  },
  data() {
    return {
      activeName: 'recommend',
      newName: 'latest',
      options: {},
      sliders: [
        {
          name: 'Singer1',
          description: this.$t('home.singerDesc'),
          imgName: 'swiper1',
          play: 300.5,
        },
        {
          name: 'Flowers',
          description: this.$t('home.flowerDesc'),
          imgName: 'swiper2',
          play: 545.7,
        },
        {
          name: this.$t('home.joy'),
          description: this.$t('home.joyDesc'),
          imgName: 'swiper3',
          play: 3095.5,
        },
        {
          name: 'Singer2',
          description: this.$t('home.singer2Desc'),
          imgName: 'swiper4',
          play: 291.6,
        },
        {
          name: this.$t('home.zhang'),
          description: this.$t('home.zhangDesc'),
          imgName: 'swiper5',
          play: 600.6,
        },
        {
          name: this.$t('home.eson'),
          description: this.$t('home.esonDesc'),
          imgName: 'swiper6',
          play: 600.6,
        },
        {
          name: this.$t('home.lee'),
          description: this.$t('home.leeDesc'),
          imgName: 'swiper7',
          play: 600.6,
        },
        {
          name: this.$t('home.ai'),
          description: this.$t('home.aiTip'),
          imgName: 'swiper8',
          play: 2144.8,
        },
      ],
      secondSliders: [
        {
          name: '自由歌唱家',
          description: 'Free',
          imgName: 'slider1',
          secondImg: 'slider2',
          thirdImg: 'slider3',
        },
        {
          name: '自由自在，翱翔天际',
          description: '天空少年',
          imgName: 'slider2',
          secondImg: 'slider3',
          thirdImg: 'slider4',
        },
        {
          name: '祝我生日快乐',
          author: '汪苏泷',
          imgName: 'slider3',
          secondImg: 'slider4',
          thirdImg: 'slider5',
        },
        {
          name: '自由歌唱家',
          description: 'Free',
          imgName: 'slider4',
          secondImg: 'slider5',
          thirdImg: 'slider6',
        },
        {
          name: '自由自在，翱翔天际',
          description: '天空少年',
          imgName: 'slider5',
          secondImg: 'slider6',
          thirdImg: 'slider7',
        },
        {
          name: '祝我生日快乐',
          author: '汪苏泷',
          imgName: 'slider6',
          secondImg: 'slider7',
          thirdImg: 'slider8',
        },
        {
          name: '自由歌唱家',
          description: 'Free',
          imgName: 'slider7',
          secondImg: 'slider8',
          thirdImg: 'slider9',
        },
        {
          name: '自由自在，翱翔天际',
          description: '天空少年',
          imgName: 'slider8',
          secondImg: 'slider9',
          thirdImg: 'slider10',
        },
        {
          name: '祝我生日快乐',
          author: '汪苏泷',
          imgName: 'slider9',
          secondImg: 'slider9',
          thirdImg: 'slider11',
        },
        {
          name: '祝我生日快乐',
          author: '汪苏泷',
          imgName: 'slider10',
          secondImg: 'slider11',
          thirdImg: 'slider12',
        },
        {
          name: '祝我生日快乐',
          author: '汪苏泷',
          imgName: 'slider11',
          secondImg: 'slider12',
          thirdImg: 'slider13',
        },
        {
          name: '祝我生日快乐',
          author: '汪苏泷',
          imgName: 'slider12',
          secondImg: 'slider13',
          thirdImg: 'slider14',
        },
        {
          name: '祝我生日快乐',
          author: '汪苏泷',
          imgName: 'slider13',
          secondImg: 'slider14',
          thirdImg: 'slider1',
        },
        {
          name: '祝我生日快乐',
          author: '汪苏泷',
          imgName: 'slider14',
          secondImg: 'slider1',
          thirdImg: 'slider2',
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
.main-content-inner {
  margin: 0 auto;
  padding-top: 20px;
  background-color: #dcdfe6;
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
.hr-wrap {
  margin: 0 30px;
  height: 1px;
  border: none;
  background-color: #888888;
}
</style>
