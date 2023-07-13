<template>
  <div>
    <HeaderCompHasExit url="/"></HeaderCompHasExit>
    <suggest-table></suggest-table>
  </div>
</template>

<script>
import HeaderCompHasExit from "@/components/HeaderCompHasExit.vue";
import SuggestTable from "@/components/SuggestTable";
export default {
  name: "SuggestView",
  components: {
    SuggestTable,
    HeaderCompHasExit
  },
  data() {
    return {

    }
  },
  created() {
    this.load();
  },
  methods:{
    load() {
      this.loading = true;
      this.request.get("/feed_back")
    }
  }
}
</script>

<style scoped>

</style>
