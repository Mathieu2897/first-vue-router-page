<template>
    <div class="playstation">
      <PlayStationGames/>
      <Footer/>
    </div>
  </template>

<script>
import PlayStationGames from '@/components/PlaystationGames.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'PlayStationView',
  components: {
    PlayStationGames,
    Footer
  }
}

</script>