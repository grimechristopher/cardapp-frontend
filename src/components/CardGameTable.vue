<template>
  <div class="card-game-table">
    <!-- The Community Section holds the community cards (dealers hand, the flop) and deck-->
    <div class="community-section">
      <CommunityCards />
      <CardGameDeck />
    </div>
    <div class="players-section">
      
    </div>
  </div>
</template>

<script setup>
import CommunityCards from './CommunityCards.vue';
import CardGameDeck from './CardGameDeck.vue';

</script>


<style scoped>
.card-game-table {
  display: grid;
  grid-auto-rows: 1fr 4fr;

  /* Game table should always be the size of the screen */
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-color: aqua;
}

/* The dealer section is the top portion of the screen */
.community-section {
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* width: 20%; */
  /* min-height: 20%; */

  background-color: lightcoral;
}

.players-section {

  background-color: aquamarine;
}

/* Force app to always be size of screen */

</style>