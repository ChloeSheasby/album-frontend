<template>
  <div>
    <v-container>
      <h1>Album List</h1>
      <h4>{{ message }}</h4>
    
      <v-row>
        <v-col  
          cols="12"
          sm="2"
        >
          <v-btn color = "success"
            @click="searchTitle"
          >
            Search
          </v-btn>
        </v-col>
        <v-col 
          col="12" 
          sm="10"
        >
          <v-text-field density="compact" clearable v-model="title"/>
        </v-col> 
      </v-row>
      <v-row>
        <v-col  
          cols="8"
          sm="4"
        >
          <span class="text-h6">Title</span>
        </v-col>
        <v-col  
          cols="8"
          sm="4"
        >
            <span class="text-h6">Description</span>
        </v-col>
        <v-col  
          cols="8"
          sm="4"
        >
            <span class="text-h6">Genre</span>
        </v-col>
        <v-col  
          cols="8"
          sm="1"
        >
          <span class="text-h6">Edit</span>
        </v-col>
        <v-col  
          cols="8"
          sm="1"
        >
          <span class="text-h6">Delete</span>
        </v-col>
      </v-row>

      <AlbumDisplay
        v-for="album in albums"
        :key="album.id"
        :album="album"
        @deleteItem="goDelete(album)"
        @updateItem="goEdit(album)"
      />
  
      <v-btn  @click="removeAllAlbums">
        Remove All
      </v-btn>

      <v-dialog
        v-model="addAlbum"
        max-width="600px"
      >
        <v-card tile>
          <v-card-title>
              <span class="text-h5">Add An Album:</span>
          </v-card-title>
          <v-container>
            <v-form>
              <v-text-field
                    label="Title"
                    v-model="album.title"
                />
                <v-text-field
                    label="Description"
                    v-model="album.description"
                />
                <v-text-field
                    label="Genre"
                    v-model="album.genre"
                />
            </v-form>
          <v-card-actions>
              <!-- <v-spacer></v-spacer> -->
              <v-btn color="success" @click="saveAlbum()">Save</v-btn>
              <v-btn color="info" @click="cancel()">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-container>
  </div>
</template>
<script>
import AlbumDataService from "../services/AlbumDataService";
import AlbumDisplay from '@/components/AlbumDisplay.vue';
export default {
  name: "listAlbums",
  data() {
    return {
      addAlbum: false,
      albums: [],
      currentAlbum: null,
      currentIndex: -1,
      title: "",
      message : "Search, Edit or Delete Albums"
    };
  },
  components: {
        AlbumDisplay
    },
  methods: {
    goEdit(album) {
      this.$router.push({ name: 'edit', params: { id: album.id } });
    },
    goDelete(album) {
      AlbumDataService.delete(album.id)
      .then( () => {
        this.retrieveAlbums()
      })
      .catch(e => {
        this.message = e.response.data.message;
      });
    },
    retrieveAlbums() {
      AlbumDataService.getAll()
      .then(response => {
        this.albums = response.data;
        
      })
      .catch(e => {
        this.message = e.response.data.message;
      });
    },
    refreshList() {
      this.retrieveAlbums();
      this.currentAlbum = null;
      this.currentIndex = -1;
    },
    setActiveAlbum(album, index) {
      this.currentAlbum = album;
      this.currentIndex = album ? index : -1;
    },
    removeAllAlbums() {
      AlbumDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        this.message = e.response.data.message;
      });
    },
    searchTitle() {
      AlbumDataService.findByTitle(this.title)
      .then(response => {
        this.albums = response.data;
        this.setActiveAlbum(null);
        
      })
      .catch(e => {
        this.message = e.response.data.message;
      });
    },
    saveAlbum() {
      var data = {
        title: this.album.title,
        description: this.album.description,
        genre: this.album.genre
      };
      AlbumDataService.create(data)
      .then(response => {
        this.album.id = response.data.id;
        console.log("add "+response.data);
        this.addAlbum = false;
      })
      .catch(e => {
        this.message = e.response.data.message;
      });
    },
    cancelAddAlbum(){
      this.addAlbum = false;
    }
  },
  mounted() {
    this.retrieveAlbums();
  }
};
</script>
<style>

</style>