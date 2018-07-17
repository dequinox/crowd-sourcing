
<template>
    <div class="">
        <div class="box border">
            <div class="top text-left"><b>На карте отображено {{ totalMarked }} из {{ total }} заявок</b></div>
            <div class="map">
                <l-map style="height: 100%;" :zoom="zoom" :center="center">
                  <l-tile-layer :url="url"></l-tile-layer>
                  <l-marker v-for="marker in markers" :key="marker._id" :visible="true" :lat-lng="marker.position" :icon="marker.icon"
                  @click="select(marker)"></l-marker>
                </l-map>
              </GmapMap>
            </div>
          <div class="bottom text-left">
              <span @click="$store.commit('setStatus', 'ignored')" class="ignored">Не просмотрено</span>
              <span @click="$store.commit('setStatus', 'discussed')" class="discussed">На обсуждении</span>
              <span @click="$store.commit('setStatus', 'pending')" class="pending">В работе</span>
              <span @click="$store.commit('setStatus', 'completed')" class="completed">Решено</span>
          </div>
    </div>
    </div>
</template>

<script>

    import {mapState, mapGetters, mapActions} from 'vuex'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
export default {
  name: 'example',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      zoom: 16,
      url:'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
    }
},
    computed: {

        ...mapState({
            center: state => state.center,
            selected: state => state.selectedRequest
        }),

        ...mapGetters({
            requests: 'markedRequests',
            totalMarked: 'totalMarked',
            total: 'total'

        }),

        markers: function() {
            return this.requests.map( (r) => {
                if (r.status === "completed"){
                    r.icon = L.icon({
                      iconUrl: 'https://image.ibb.co/gqFCNT/greenmark.png',
                      shadowUrl: 'http://koraku.tylermares.com/marker-shadow.png',
                      shadowSize:   [30, 30],
                      iconAnchor:   [15, 30],
                      shadowAnchor: [0, 30]
                    })
                }
                else if (r.status === "pending") {
                    r.icon = L.icon({
                      iconUrl: 'https://image.ibb.co/bAAe2T/yellowmark.png',
                      shadowUrl: 'http://koraku.tylermares.com/marker-shadow.png',
                      shadowSize:   [30, 30],
                      iconAnchor:   [15, 30],
                      shadowAnchor: [0, 30]
                    })
                }
                else if (r.status == "ignored"){
                    r.icon = L.icon({
                      iconUrl: 'https://image.ibb.co/dzxRhT/greymark.png',
                      shadowUrl: 'http://koraku.tylermares.com/marker-shadow.png',
                      shadowSize:   [30, 30],
                      iconAnchor:   [15, 30],
                      shadowAnchor: [0, 30]
                    })
                }
                else {
                    r.icon = L.icon({
                      iconUrl: 'https://image.ibb.co/dQBAGo/indigo.png',
                      shadowUrl: 'http://koraku.tylermares.com/marker-shadow.png',
                      shadowSize:   [30, 30],
                      iconAnchor:   [15, 30],
                      shadowAnchor: [0, 30]
                    })
                }

                r.position = {
                    lat: r.location.coordinates[0],
                    lng: r.location.coordinates[1]
                }


                return r
            })
        },

        methods: {
            ...mapActions({
                select: 'select'
            })
        }
    }
}
</script>


<style scoped>

    .completed::before {
        background-color: #38B09D;
    }

    .pending::before {
        background-color: #f2c94c;
    }

    .ignored::before {
        background-color: #7e7e7e;
    }

    .discussed::before {
        background-color: #511a85;
    }
    .custom-select {
        height: 30px;
    }
    .top {
        padding: auto 0;
        height: 4%;
    }
    .box {
        height: 100%;
        width: 100%;
        border-radius: 5px;
    }
    .border {
        padding: 15px;
    }

     .map {
        height: 92%;
    }

    .bottom {
       padding-top: 10px;
       font-size: 10px;
    }
    span {
        margin-right: 15px;
    }
    span::before {
        content: "";
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 5px;
        vertical-align: middle;
        border-radius: 100%;
    }

</style>
