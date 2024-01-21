<template>
  <div>
    <button @click="goToRoomList()">Rooms</button>
  </div>
</template>
<script setup> 
import { defineEmits } from 'vue';

const emit = defineEmits(['goToRoomList']);

function goToRoomList() {
  emit('goToRoomList');
}
</script>
