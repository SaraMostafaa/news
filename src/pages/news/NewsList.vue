<template>

  <v-container fluid>
      <v-row dense>
      <v-col
         v-for="news in newsList"
          :key="news.id"
        >
    <new-card 
    :key="news.id"
    :id="news.id"
    :title="news.title"
    :details="news.details"
    :image="news.image"
    ></new-card>
       </v-col>
      </v-row>
    </v-container>
 
</template>

<script>
import NewCard from '../../components/news/NewCard.vue';
export default {
  components:{
    NewCard
  },

  computed: {

    hasCoaches() {
      return !this.isLoading && this.$store.getters['news/hasNews'];
    },
    newsList() {
      return this.$store.getters['news/news'];  
  }
  },


};
</script>