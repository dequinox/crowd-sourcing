<template>
    <div>
        <GmapMap
          :center="center"
          :zoom="7"
          :animation="5"
          map-type-id="terrain"
          style="width: 100%; height: 100%"
        >
          <GmapMarker
            :key="request.id"
            v-for="request in requests"
            :position="request.location"
            :clickable="true"
            @click="select(request)"
          />
</GmapMap>
    </div>
</template>

<script>

    import {mapState, mapGetters, mapActions} from 'vuex'
    import {gmapApi} from 'vue2-google-maps'

    export default {

        computed: {
            ...mapState({
                center: state => state.center,
                selected: state => state.selectedRequest
            }),

            ...mapGetters({
                requests: 'markedRequests',

            }),
        },

        methods: {
            ...mapActions({
                select: 'select'
            })
        }
    }
</script>

<style scoped>
</style>
