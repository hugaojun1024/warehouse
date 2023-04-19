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
  }
}
</script>

<style scoped>

</style>
