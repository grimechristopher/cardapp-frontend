<template>
  <div class="hand" :title="'handId: ' + hand.id">
      <PlayingCard
        v-for="card in cards" :key="card.suit+card.value"
        :card="card"
      />
  </div>
</template>

<script setup>
import PlayingCard from './PlayingCard.vue';
import { defineProps, ref, watch } from 'vue';
import { useStore } from 'vuex';

const props = defineProps(['hand']);

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
  flex: 1 1 auto;
  display: flex;
  align-items: stretch;
}
.card-container {
  height: 100%;
  
}
</style>