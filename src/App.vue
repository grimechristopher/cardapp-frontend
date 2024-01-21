<template>
  <NavigationBar 
      @goToRoomList="showRoomList = !showRoomList"
  />
  <RoomList 
    v-if="showRoomList"
    @closeList="showRoomList = false"
  />
  <CardGameTable />
</template>

<script>
import NavigationBar from './components/Layout/NavigationBar.vue'
import RoomList from './components/RoomList/RoomList.vue'
import CardGameTable from './components/GameTable/CardGameTable.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    RoomList,
    CardGameTable
  },
  data() {
    return {
      showRoomList: false
    }
  },
  methods: {

  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: black;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

</style>
