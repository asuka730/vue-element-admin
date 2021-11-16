<template>
  <div>
    <a-carousel
      arrows
      dot-position="bottom"
      dots-class="slick-dots slick-thumb"
    >
      <a slot="customPaging" slot-scope="props">
        <img :src="getImgUrl(props.i)">
        {{ cemeras[props.i].name }}
      </a>
      <div v-for="cemera in cemeras" :key="cemera.image.src">
        <img :src="cemera.image.src">
      </div>
    </a-carousel>
    <div style="margin-top: 120px">
      <SlideRange :max="10" @onChangeIdx="handleIdx" />
    </div>
  </div>
</template>
<script>
import SlideRange from '../SlideRange'

export default {
  components: { SlideRange },
  data() {
    return {
      cemeras: [
        {
          image: {
            src: 'http://r1xjuvtpx.hd-bkt.clouddn.com/dump/IMG_1.jpg_boxed_image.png',
            createdAt: 'xx'
          },
          cemeraid: 'xxx',
          name: '监控点1-1号监控'
        },
        {
          image: {
            src: 'http://r1xjuvtpx.hd-bkt.clouddn.com/dump/IMG_3.jpg_boxed_image.png',
            createdAt: 'xx'
          },
          cemeraid: 'xxx',
          name: '监控点1-2号监控'
        }
      ],
      id: '监控点1',
      idx: 0
    }
  },
  methods: {
    getImgUrl(i) {
      return this.cemeras[i].image.src
    },
    handleIdx(i) {
      console.log(i)
      this.idx = i
    }
  }
}
</script>
<style scoped>
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
