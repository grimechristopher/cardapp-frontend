<template>
  <div class="seat" ref="seatRef" :class="{'seat-right': props.rightSideRow}" >
    <div class="seat-info">
      <div class="seat-header" :class="{'right-side': props.rightSideRow}">
        <span>{{ props.seat.number }}</span>&nbsp;
        <span v-if="player">{{ player.username }}</span>
        <span v-else><button>+</button></span>
      </div>
      <div class="timer">
  
      </div>
    </div>
      <div class="hands-container" >
          <CardGameHand
            v-for="hand in hands" :key="hand.id"
            :hand="hand"
            :rightSideRow="props.rightSideRow"
          />
      </div>
    <!-- {{ props.seat }} -->
  </div>
</template>
 
<script setup>
import CardGameHand from './CardGameHand.vue';
import { defineProps, ref, watch, onMounted } from 'vue';
import { useStore } from 'vuex';

const props = defineProps(['seat', 'height', 'rightSideRow']);
const store = useStore();

const player = ref({});
const hands = ref([]);

const seatRef = ref(null);

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

watch(() => props.height, () => {
  if (seatRef.value) {
    seatRef.value.style.height = props.height + 'px';
  }
}, {immediate: true})  

onMounted(()=> {
  seatRef.value.style.height = props.height + 'px';
})
</script>

<style scoped>
.seat {
  /* border-bottom: 1px solid #808080; */
  overflow: hidden;

  display: flex;
  flex-direction: column;
  max-height: 100%;

  margin: 0.7rem;
  /* border-top: 1px solid #fefefe; */
  /* border-bottom: 1px solid #fefefe; */
  /* border-top-left-radius: 25%; */
  /* border-bottom-left-radius: 25%; */

}


.right-side {
  display: flex;
  /* align-items: flex-end; */
  flex-direction: row-reverse;
  /* flex-direction: column-reverse; */
  /* flex-direction: column-reverrse; */

}
.seat-hands {
  flex-shrink: 1;
  min-height: 0;
}
.hands-container {
  /* height: 100%; */
  /* flex: 0 1 auto; */
  flex-shrink: 1;
  flex-grow: 0;
  min-height: 100%;
  max-height: 100%;

  display: flex;

  /* width: 20%; */
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: column; */
}

.right-container {
  flex-direction: row-reverse;
}

</style>