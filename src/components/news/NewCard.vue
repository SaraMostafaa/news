<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{title}}
        </div>

        <v-list-item-subtitle>{{details}}</v-list-item-subtitle>
      </v-list-item-content>

        <v-img
              :src="image"
              class="white--text align-end ml-2 mt-10"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100"
              width="100"

            />
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        :to= "newsDetailsLink"
      >
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>



<script>

export default ({
props:["id", "title", "details", "image"],
computed:{
    newsDetailsLink(){
        return '/news/' + this.id;
    }
}
})
</script>
