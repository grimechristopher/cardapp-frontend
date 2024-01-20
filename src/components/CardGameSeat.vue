<template>
  <div class="seat">
    <div class="seat-header">
      <span>{{ props.seat.number }}</span>&nbsp;
      <span v-if="player">{{ player.username }}</span>
      <span v-else><button>+</button></span>
    </div>
    <div class="timer">

    </div>
    <div class="hands-container">
      <div class="hand-c" v-for="hand in hands" :key="hand.id">
        <CardGameHand
          
          :hand="hand"
        />
      </div>
    </div>
    <!-- {{ props.seat }} -->
  </div>
</template>
 
<script setup>
import CardGameHand from './CardGameHand.vue';
import { defineProps, ref, watch } from 'vue';
import { useStore } from 'vuex';

const props = defineProps(['seat']);
const store = useStore();

const player = ref({});
const hands = ref([]);

setPlayer();
watch (store.state.players, () => {
  console.log(store.state.players);
  setPlayer();
})
function setPlayer() {
  player.value = store.state.players.find(player => player.id === props.seat.playerId);
}

setHands();
watch (store.state.hands, () => {
  console.log(store.state.hands);
  setHands();
});
function setHands() {
  hands.value = store.state.hands.filter(hand => hand.seat === props.seat.id);
}


</script>

<style scoped>
.seat {
  border-bottom: 1px solid grey;
  overflow: hidden;
  flex: 1 1 auto;
  /* position: absolute; */

}
.hands-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* overflow: hidden; */
}
.hand-c {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* overflow: hidden; */
}
</style>