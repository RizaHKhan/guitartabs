<template>
  <div>
    <Panel />
  </div>
</template>

<script>
import Panel from './Panel'
import SongService from '../services/SongService'

export default {
  components: {
      Panel
  },
  data() {
      return{
        songs: null
      }
  },
  methods: {

  }, 
  async mounted() {
      //do a request to the backend for all the songs
      this.songs = (await SongService.index()).data
  }
}
</script>

<style scoped lang="scss">

</style>