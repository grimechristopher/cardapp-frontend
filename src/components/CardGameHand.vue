<template>
  <div class="hand" :title="'handId: ' + hand.id">
    <div class="card-container" :class="{'container-right': props.rightSideRow}">
      <PlayingCard
        v-for="(card, index) in cards" :key="card.suit+card.value"
        :card="card"
        :handIndex="index"
      />
    </div>
  </div>
</template>

<script setup>
import PlayingCard from './PlayingCard.vue';
import { defineProps, ref, watch } from 'vue';
import { useStore } from 'vuex';

const props = defineProps(['hand', 'rightSideRow']);

const store = useStore();
 
const cards = ref([]);
setCards();

watch (store.state.cards, () => {
  setCards();
});
function setCards() {
  cards.value = store.state.cards.filter(card => card.handId === props.hand.id);
}
</script>

<style scoped>
.hand {
  /* flex-direction: row-reverse; */
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* align-items: stretch; */
  min-height: 75%;
  max-height: 75%;
}

.right-side {
  /* display: block; */
}
.card-container {
  display: flex;
  min-height: 100%;
  height: 100%;
  max-height: 100%;
  /* width: 100%; */
  position: relative;
}

.container-right {
  flex-direction: row-reverse;
}
/* .card-container > div:not(:first-child) {
  position: relative;
  margin-top: -50%;
} */

</style>