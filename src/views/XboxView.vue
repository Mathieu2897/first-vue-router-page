<template>
    <div class="xbox">
        <XboxGames/>
        <Footer/>
      </div>
  </template>

<script>
import XboxGames from '@/components/XboxGames.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'GamesView',
  components: {
    XboxGames,
    Footer
  }
}

</script>

