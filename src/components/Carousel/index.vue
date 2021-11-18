<template>
  <div>
    <a-carousel
      arrows
      dot-position="bottom"
      dots-class="slick-dots slick-thumb"
    >
      <a slot="customPaging" slot-scope="props">
        <img :src="getImgUrl(props.i)">
        <span class="customPaging-text">{{ cemeras[props.i].name }}</span>
      </a>
      <div v-for="cemera in cemeras" :key="cemera.image">
        <img :src="cemera.image">
      </div>
    </a-carousel>
    <div style="margin-top: 120px">
      <SlideRange :max="5" @onChangeIdx="handleIdx" />
    </div>
  </div>
</template>
<script>
import SlideRange from '../SlideRange'

export default {
  components: { SlideRange },
  props: {
    rightDetailData: {
      default: undefined
    }
  },
  data() {
    return {
      cemeras: [
        {
          image:
            'http://r1xjuvtpx.hd-bkt.clouddn.com/dump/IMG_1.jpg_boxed_image.png',
          name: '1号监控'
        },
        {
          image:
            'http://r1xjuvtpx.hd-bkt.clouddn.com/dump/IMG_2.jpg_boxed_image.png',
          name: '2号监控'
        },
        {
          image:
            'http://r1xjuvtpx.hd-bkt.clouddn.com/dump/IMG_3.jpg_boxed_image.png',
          name: '3号监控'
        },
        {
          image:
            'http://r1xjuvtpx.hd-bkt.clouddn.com/dump/IMG_4.jpg_boxed_image.png',
          name: '4号监控'
        }
      ],
      id: '监控点1',
      idx: 0
    }
  },
  watch: {
    rightDetailData(val) {
      this.getCurImage(val.id, this.idx)
    },
    idx(val) {
      let v = 0
      if (this.rightDetailData && this.rightDetailData.id) {
        v = this.rightDetailData.id
      }
      this.getCurImage(v, val)
    }
  },
  methods: {
    getImgUrl(i) {
      return this.cemeras[i].image
    },
    handleIdx(i) {
      this.idx = i
    },
    getCurImage(id, idx) {
      const urls = [...this.cemeras]
      for (let i = 0; i < 4; i++) {
        const t = i + idx * 4 + id
        const url = `http://r1xjuvtpx.hd-bkt.clouddn.com/dump/IMG_${t}.jpg_boxed_image.png`
        urls[i].image = url
      }
      this.cemeras = urls
    }
  }
}
</script>
<style scoped>
.ant-carousel >>> .customPaging-text {
  color: white;
}
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
