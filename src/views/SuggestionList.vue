<template>
  <div>
    <div class="header">
      <HeaderCompHasExit url="/"></HeaderCompHasExit>
    </div>
    <div class="context">
      <div>
        <div class="suggestion-item" v-for="item in suggestionList">
          <p>{{item.suggestion}}</p>
          <p><span>反馈人：</span><span>{{item.feedBackPerson}}</span></p>
          <p><span>反馈问题描述：</span><span>{{item.problemDesc}}</span></p>
        </div>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
export default {
  name: "SuggestionList",
  components:{
    HeaderCompHasExit
  },
  data(){
    return {
      suggestionList:[]
    }
  },
  created() {
    this.load()
  },
  methods:{
    load(){
      alert(123)
      //加载数据
      this.request.get("/feed_back/page",{
        params:{
          pageNum:1,
          pageSize:8
        }
      }).then(res=>{
        this.suggestionList = res.records
      })
    }
  }
}
</script>

<style scoped>
.context{
  width: 100%;
  height: calc(100vh - 60px);
}
.context .suggestion-item{
  width: 88%;
  height: 120px;
  margin: 0px auto;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid #eee;
}
</style>
