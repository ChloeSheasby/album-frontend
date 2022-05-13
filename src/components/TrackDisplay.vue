<template>
<v-row>
  <v-col  
    cols="8"
    sm="4"
  >
      <span >{{ track.title }}</span>
  </v-col>
  <v-col  
    cols="8"
    sm="4"
  >
      <span> {{ track.length }}</span>
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
    track: Object
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
