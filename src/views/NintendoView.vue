<template>
    <div class="nintendo">
      <NintendoGames/>
      <Footer/>
    </div>
  </template>

<script>
import NintendoGames from '@/components/NintendoGames.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'NintendoView',
  components: {
    NintendoGames,
    Footer
  }
}

</script>