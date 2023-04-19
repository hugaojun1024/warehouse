<template>
  <div>
    <header-comp></header-comp>
    <suggest-table></suggest-table>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp';
import SuggestTable from "@/components/SuggestTable";
export default {
  name: "SuggestView",
  components: {
    SuggestTable,
    HeaderComp
  }
}
</script>

<style scoped>

</style>
