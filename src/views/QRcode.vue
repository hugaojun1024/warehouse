<!--<template>-->
<!--&lt;!&ndash;  <div>&ndash;&gt;-->
<!--    <canvas ref="canvas" width="720" height="540"></canvas>-->

<!--    <div class="scan">-->
<!--      <video ref="video"></video>-->
<!--    </div>-->
<!--    <br />-->

<!--    <button @click="capturePhoto">{{ captureButtonText }}</button>-->
<!--    <button @click="saveImage">保存</button>-->

<!--    <br />-->

<!--    <div>-->
<!--      <h2>识别结果：</h2>-->
<!--      <ul>-->
<!--        <li v-for="code in codes" :key="code">{{ code }}</li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<template>
  <el-container class="home-container">
    <!--头部区域-->
    <el-header>
      <HeaderComp></HeaderComp>
    </el-header>
    <!--页面主体区-->
    <el-main>
      <div>
        <canvas ref="canvas" width="720" height="540"></canvas>

        <div class="scan">
          <video ref="video"></video>
        </div>
        <br />

<!--        <button @click="capturePhoto">{{ captureButtonText }}</button>-->
<!--        <button @click="saveImage">保存</button>-->
        <el-button @click="capturePhoto" type="primary" style="margin-right: 30px; width: 120px; height: 50px;">{{ captureButtonText }}</el-button>
        <el-button @click="saveImage" type="success" style="width: 120px; height: 50px;">识别二维码</el-button>
        <br />

        <div>
          <h2>识别结果：</h2>
          <ul>
            <li v-for="code in codes" :key="code">{{ code }}</li>
          </ul>
        </div>
      </div>
    </el-main>
    <!--底部区域-->
    <el-footer>
      <NavigatorBar index="2"></NavigatorBar>
    </el-footer>
  </el-container>
</template>
<script>
import jsQR from 'jsqr/dist/jsQR.js';
import $ from 'jquery';
import NavigatorBar from "@/components/NavigatorBar.vue";
import HeaderComp from '@/components/HeaderComp';
export default {
  name:"QRcode",
  components:{
    NavigatorBar,
    HeaderComp
  },
  data() {
    return {
      captureButtonText: '拍照',
      isCaptured: false,
      codes: [],
    };
  },
  mounted() {
    this.initializeCamera();
  },
  methods: {
    initializeCamera() {
      const video = this.$refs.video;
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if ('srcObject' in video) {
            video.srcObject = stream;
          } else {
            video.src = window.URL.createObjectURL(stream);
          }
          video.onloadedmetadata = () => {
            video.play();
          };
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    },
    capturePhoto() {
      const video = this.$refs.video;
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');

      if (!this.isCaptured) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        $(canvas).show();
        $(video).hide();
        this.captureButtonText = '重新拍照';
        this.isCaptured = true;
      } else {
        $(video).show();
        $(canvas).hide();
        this.captureButtonText = '拍照';
        this.isCaptured = false;
      }

      this.decodeQRCode();
    },
    decodeQRCode() {
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      if (code) {
        this.showCode(code.data);
        //打印识别出来的地址
        console.log(code.data);
        const regex = /unitCode=([^&]+)/;
        const match = code.data.match(regex);
        const unitCode = match ? match[1] : null;
        console.log(unitCode);
        //识别成功跳转到资产页面
        this.$router.push({
          name: 'zicanView',
          query:{
            unicode: unitCode
          }
        });
      } else {
        this.$message.error('识别错误！')
      }
    },
    showCode(code) {
      this.codes.push(code);
    },
    saveImage() {
      const canvas = this.$refs.canvas;
      const image = canvas.toDataURL('image/png');

      this.decodeQRCode();
      // Use the image data as needed (e.g., save or process it)
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#capture {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
}

canvas {
  width: 50%;
  height: 50%;
  display: none;
}

video {
  width: 100%;
  height: 45%;
}

#save {
  margin-top: 10px;
}

.scan {
  width: 100%;
  height: 100%;
  margin: 30px auto;
  position: relative;
  background: linear-gradient(to left, #108EE9, #108EE9) left top no-repeat, linear-gradient(to bottom, #108EE9, #108EE9) left top no-repeat, linear-gradient(to left, #108EE9, #108EE9) right top no-repeat, linear-gradient(to bottom, #108EE9, #108EE9) right top no-repeat, linear-gradient(to left, #108EE9, #108EE9) left bottom no-repeat, linear-gradient(to bottom, #108EE9, #108EE9) left bottom no-repeat, linear-gradient(to left, #108EE9, #108EE9) right bottom no-repeat, linear-gradient(to left, #108EE9, #108EE9) right bottom no-repeat;
  background-size: 3px 20px, 20px 3px, 3px 20px, 20px 3px;
}

.scan video {
  width: 100%;
  height: 100%;
}

.scan::after {
  content: '';
  width: 978px;
  border: 2px solid #BBE2FF;
  position: absolute;
  left: 8px;
  top: 2px;
  animation: myfirst 8s infinite;
}

@keyframes myfirst {
  from {
    top: 2px;
  }
  to {
    top: 728px;
  }
}
</style>
