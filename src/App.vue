<template>
  <NavigationBar 
      @goToRoomList="showRoomList = !showRoomList"
  />
  <router-view></router-view>
</template>

<script>
import NavigationBar from './components/Layout/NavigationBar.vue'
import { socket, joinRoom } from './socket';

export default {
  name: 'App',
  components: {
    NavigationBar,
  },
  data() {
    return {
      showRoomList: false
    }
  },
  mounted() {
    socket.connect();
    joinRoom();
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
