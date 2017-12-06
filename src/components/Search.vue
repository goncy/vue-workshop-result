<template>  
  <div>
    <toaster v-show="showToaster" :message="toasterMessage" @close="toggleToaster"></toaster>
    <a href="#" @click.prevent="reset">x</a>
    <input v-model="query" @keyup.enter="search" type="text">
    <button @click="search" type="button">Search</button>
    <p v-if="loading">Loading</p>
    <p v-if="!pristine && !loading">{{found}}</p>
    <ul v-if="results.length">
      <artist v-for="artist in results" :artist="artist" :key="artist.id"></artist>
    </ul>
  </div>
</template>

<script>
  import spotify from "../services/spotify.service"

  import Artist from "./Artist.vue"
  import Toaster from "./Toaster.vue"

  export default {
    name: "Search",

    components: {
      Artist,
      Toaster
    },

    data() {
      return {
        showToaster: false,
        toasterMessage: "",
        pristine: true,
        loading: false,
        query: "",
        results: []
      }
    },

    created() {
      if (location.pathname === "/") {
        return
      }

      this.query = location.pathname.substring(1)
      this.search()
    },

    methods: {
      search() {
        this.pristine = false
        this.loading = true
        spotify
          .search(this.query, "artist")
          .then(response => {
            this.loading = false
            this.results = response.artists.items
          })
          .catch(err => {
            this.loading = false
            this.toggleToaster()
            this.toasterMessage = err || "Something happened, try again later"
          })
      },
      reset() {
        this.pristine = true
        this.results = []
        this.query = ""
      },
      toggleToaster() {
        this.showToaster = !this.showToaster
      }
    },

    computed: {
      found() {
        if (this.results.length > 0) {
          return this.results.length + " results found"
        }

        return "No results found"
      }
    },

    watch: {
      query(value) {
        console.log("query is now: ", value) // eslint-disable-line
      }
    }
  }
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
}
</style>
