
<template>
  <div>
    <l-map style="height: 100%;" :zoom="zoom" :center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker v-for="marker in markers" :key="marker.id" :visible="true" :lat-lng="marker.location" :icon="marker.icon"></l-marker>
    </l-map>
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
      center: L.latLng(55.750261, 48.742984),
      url:'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      marker: L.latLng(47.413220, -1.219482),
      selectedIcon: L.icon({
        iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-red.png',
        shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
      }),
    }
},
    computed: {

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


                return r
            })
        },
    }
}
</script>
