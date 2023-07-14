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
        <div style="display: flex; justify-content: center;">
          <canvas ref="canvas" width="720px" height="540px"></canvas>
        </div>

        <div class="scan">
          <video ref="video"></video>
        </div>
        <br/>

        <!--        <button @click="capturePhoto">{{ captureButtonText }}</button>-->
        <!--        <button @click="saveImage">保存</button>-->
        <div style="display: flex; justify-content: center;">
          <el-button @click="capturePhoto" type="primary" style="width: 320px; height: 50px;">{{
              captureButtonText
            }}
          </el-button>
          <!--          <el-button @click="saveImage" type="success" style="width: 120px; height: 50px;">识别二维码</el-button>-->
        </div>
        <br/>

        <!--        <div>-->
        <!--          <h2>识别结果：</h2>-->
        <!--          <ul>-->
        <!--            <li v-for="code in codes" :key="code">{{ code }}</li>-->
        <!--          </ul>-->
        <!--        </div>-->
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
  name: "QRcode",
  components: {
    NavigatorBar,
    HeaderComp
  },
  data() {
    return {
      captureButtonText: '识别二维码',
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
      navigator.mediaDevices.getUserMedia({video: true})
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
        this.captureButtonText = '重新识别二维码';
        this.isCaptured = true;
        this.decodeQRCode();
      } else {
        $(video).show();
        $(canvas).hide();
        this.captureButtonText = '识别二维码';
        this.isCaptured = false;
      }

    },
    decodeQRCode() {
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      const token = localStorage.getItem("token");
      const userLoginInfo = localStorage.getItem("userLoginInfo");

      if (token || userLoginInfo) {
        if (code) {
          // 识别成功
          this.$message.success("识别成功！")
          this.showCode(code.data);
          //打印识别出来的地址
          console.log(code.data);

          //截取unitCode后面的数字
          const regex = /unitCode=([^&]+)/;
          const match = code.data.match(regex);
          const unitCode = match ? match[1] : null;
          console.log(unitCode);

          //识别成功跳转到资产页面
          this.$router.push({
            name: 'zicanView',
            query: {
              unicode: unitCode
            }
          });
        } else {
          this.$message.error('识别错误！')
        }
      } else {
        this.$message.error("该功能需要登录获取访问权限！");
        this.$router.push("/LoginUser");
      }

    },
    showCode(code) {
      this.codes.push(code);
    },
    saveImage() {
      const canvas = this.$refs.canvas;
      //const image = canvas.toDataURL('image/png');

      this.decodeQRCode();
      // Use the image data as needed (e.g., save or process it)
    },
  },
};
</script>

<style lang="less" scoped>

.el-header {
  padding: initial;
}

.el-footer {
  padding: initial;
}

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
  width: 80%;
  height: 80%;
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

// 二维码框中的向下滑横线

//.scan::after {
//  content: '';
//  width: 366px;
//  border: 2px solid #BBE2FF;
//  position: absolute;
//  left: 2px;
//  top: 2px;
//  animation: myfirst 8s infinite;
//}

.el-button {
  margin-top: 220px;
}

@keyframes myfirst {
  from {
    top: 2px;
  }
  to {
    top: 280px;
  }
}
</style>
