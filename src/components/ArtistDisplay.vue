<template>
<v-row>
  <v-col  
    cols="8"
    sm="4"
  >
      <span >{{ artist.fName }}</span>
  </v-col>
  <v-col  
    cols="8"
    sm="4"
  >
      <span> {{ artist.lName }}</span>
  </v-col>
  <v-col  
    cols="8"
    sm="1"
  >
      <v-btn size="x-small" icon="mdi-pencil" @click="updateItem"/>
  </v-col>
  <v-col  
    cols="8"
    sm="1"
  >
      <v-btn size="x-small" icon="mdi-trash-can" @click="deleteItem"/>
  </v-col>
</v-row>
</template>

<script>
export default {
  props: {
    artist: Object
  },
  data() {
    return {
      
    };
  },
  methods: {

    deleteItem() {
      this.$emit("deleteItem");
    },
    updateItem() {
      this.$emit("updateItem");
    }
  }
};
</script>

<style></style>
