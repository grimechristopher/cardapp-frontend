<template>
  <div class="room-list">
    <RouterLink v-if="store.state.room" :to="{ name: 'CardGameTable', params: {
      roomId: store.state.room.id
    } }">Close List</RouterLink>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();
</script>

<style scoped>
.room-list {
  position: absolute;
  height: 100%;
  width: 100vw;
  z-index: 11;
  background-color: #fefefe;
}
</style>
