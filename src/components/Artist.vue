<template>
  <div class="artist">
    <li>
      <div class="result">
        <p>{{ artist.name }}</p>
        <img v-if="artist.images.length" :src="artist.images[0].url" :alt="artist.name">
        <p v-else>🚫 🌅</p>
        <small> {{ artist.genres | dash-list }}</small>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "Artist",

  props: {
    artist: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
li {
  display: flex;
  justify-content: center;
  border: 1px solid #42b983;
  width: 100%;
  height: 100%;
}

.artist, .result {
  display: flex;
  flex-direction: column;
  align-items: center;

  
}

.result {
  p {
    margin: 0;
  }

  padding: 10px;
}

img {
  width: 100px;
  height: 100px;
}
</style>
