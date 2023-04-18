<template>
  <div style="text-align: center">
      <div class="header">
        <HeaderCompHasExit :url="'/'"></HeaderCompHasExit>
      </div>
      <el-result icon="success" title="反馈成功" subTitle="我们已经收到您的反馈"/>
      <button class="redBtn" @click="back()">返回</button>
  </div>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
export default {
  name: "SuggestionSuccess",
  components:{HeaderCompHasExit},
  methods:{
    back(){
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>

</style>
