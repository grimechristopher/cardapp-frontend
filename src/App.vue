<template>
  <!-- <CardTable/> -->
  <CardGameTable />
</template>

<script>
// import CardTable from './components/CardTable.vue'
import CardGameTable from './components/CardGameTable.vue'

export default {
  name: 'App',
  components: {
    // CardTable,
    CardGameTable
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

</style>
