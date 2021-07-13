<template>
 <v-container fluid class="fluid">
   <v-img
      height="250"
      :src="selectedNew.image"
    ></v-img>

  <h1>
    {{title}}
    </h1>

    <p>{{details}}</p>
 </v-container>
</template>

<script>
export default {
  props: ["id"],
  data(){
    return{
      selectedNew: {},
    }
  },
  computed:{
     title() {
      return this.selectedNew.title;
    },
    details() {
      return this.selectedNew.details;
    },
  },
 
  created(){
    console.log(this.id)
    this.selectedNew  = this.$store.getters['news/news'].find(news => news.id === this.id)
    console.log(this.selectedNew)
  }
}
</script>
