<template>
  <div class="news">
   <NewsItems/>
   <Footer/>
  </div>
</template>

<script>
import NewsItems from '@/components/NewsItems.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'NewsView',
  components: {
    NewsItems,
    Footer
  }

}

</script>
