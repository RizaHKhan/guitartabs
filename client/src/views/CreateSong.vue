<template>
    <div>
        <Panel title="Song MetaData">
            <v-text-field
                label="Title"
                v-model="title"
            >


            </v-text-field>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
export default {
    data() {
        return {
            title: null,
            artist: null,
            genre: null,
            album: null,
            albumImageUrl: null,
            youtubeId: null,
            lyrics: null,
            tab: null
        }
    },
    components: {
        Panel
    }
}
</script>

<style lang="scss">

</style>