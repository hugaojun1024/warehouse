<template>
  <div>
    <el-carousel :interval="3000" arrow="always" height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in images" :key="item">
        <el-image :src="item" class="images"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerHeight: 200,
      images: [
        require('../assets/Snipaste_2023-03-10_21-43-45.jpg'),
        require('../assets/Snipaste_2023-03-10_21-45-48.jpg'),
        require('../assets/Snipaste_2023-03-10_21-48-27.jpg')
      ]
    }
  },
  mounted () {
    this.setSize()
    window.addEventListener('resize', () => {
      this.setSize()
    }, false)
  },
  methods: {
    setSize () {
      this.bannerHeight = document.body.clientWidth / 4
    }
  }
}
</script>

<style lang="less" scoped>

.el-carousel-item img{
  width: 100%;
  height: 100%;
}

.images{
  width: 100%;
  height: inherit;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
