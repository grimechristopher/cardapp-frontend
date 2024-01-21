<template>
  <div class="room-list">
    <button @click="closeList()">Close List</button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['closeList']);

function closeList() {
  emit('closeList');
}

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
