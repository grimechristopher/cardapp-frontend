<template>
  <div class="seat" ref="seatRef" :class="{'seat-right': props.rightSideRow}" >
    <div class="seat-info">
      <div class="seat-header" :class="{'right-side': props.rightSideRow}">
        <span v-html="numberCircle" @click="setActiveSeat"></span>&nbsp;
        <span v-if="props.seat.username" @click="removeFromSeat">{{ props.seat.username }}</span> 
        <span v-else-if="!store.state.user.seat"><button @click="takeSeat">+</button></span> {{ store.state.user }}
      </div>
      <div class="timer">
        <progress v-if="isActiveSeat()" :id="`seat${props.seat.id}_progress`" :value="store.state.room.activeTurnTime" max="30"> {{ store.state.room.activeTurnTime }}</progress>
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
import { setActiveTurn, leaveSeat} from '../../socket.js';
import { useRouter } from 'vue-router';

const props = defineProps(['seat', 'height', 'rightSideRow']);
const store = useStore();
const router = useRouter();

const player = ref({});
const hands = ref([]);

const numberCircle = ref('');

numberCircle.value = `&#${9311 + props.seat.number};` // Fun way to get unicode characters :)

const seatRef = ref(null);

setPlayer();
watch (store.state.players, () => {
  setPlayer();
})

function setPlayer() {
  player.value = null;
  // player.value = store.state.players.find(player => player.id === props.seat.playerId);
}

setHands();
watch (store.state, () => {
  setHands();
}), {deep: true};
function setHands() {
  hands.value = store.state.hands.filter(hand => hand.seat_id === props.seat.id);
}

watch(() => props.height, () => {
  if (seatRef.value) {
    seatRef.value.style.height = props.height + 'px';
  }
}, {immediate: true})  

onMounted(()=> {
  seatRef.value.style.height = props.height + 'px';
})

function setActiveSeat() {
  setActiveTurn(props.seat.id)
}

function isActiveSeat() {
  if (store.state.room.activeSeat === props.seat.id) {
    return true;
  }
  else {
    return false;
  }
}

function takeSeat() {
  console.log('takeSeat', store.state.user)
  if (!store.state.user.username) {
    router.push({ name: 'LoginPage' });
  }
  else {
    // joinSeat(props.seat.id);
    console.log("WUT")
  }

  // joinSeat(props.seat.id);
}

function removeFromSeat() {
  leaveSeat(props.seat.id);
}

</script>

<style scoped>
.seat {
  color: #fefefe;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  max-height: 100%;

  margin: 0.7rem;
  padding-left: 0.25rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #fefefe;
  border-left: 1px solid #fefefe;
  border-bottom-left-radius: 12.5%;

}

.seat-right {
  padding-left: 0;
  padding-right: 0.25rem;
  border-left: 0;
  border-right: 1px solid #fefefe;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 12.5%;
}

.seat-header {
  padding-bottom: 2px;
}

.right-side {
  display: flex;
  flex-direction: row-reverse;
}
.seat-hands {
  flex-shrink: 1;
  min-height: 0;
}
.hands-container {
  flex-shrink: 1;
  flex-grow: 0;
  min-height: 100%;
  max-height: 100%;
  overflow: hidden;

  display: flex;
}

.right-container {
  flex-direction: row-reverse;
}

progress {
  width:100%;
}
</style>