<template>
    <div class="box border">
        <div class="top text-left"><b>На карте отображено {{ totalMarked }} из 10 заявок</b></div>
        <div class="map">
            <GmapMap
              :center="center"
              :zoom="16"
              :animation="1"
              map-type-id="terrain"
              style="width: 100%; height: 100%"
              v-bind:options="mapStyle"
            >
              <GmapMarker
                :key="marker.id"
                v-for="marker in markers"
                :position="marker.location"
                :clickable="true"
                :icon="marker.icon"
                @click="select(marker)"
              />
          </GmapMap>
        </div>
      <div class="bottom text-left">
          <span @click="$store.commit('setStatus', 'ignored')" class="ignored">Не просмотрено</span>
          <span @click="$store.commit('setStatus', 'discussed')" class="discussed">На обсуждении</span>
          <span @click="$store.commit('setStatus', 'active')" class="active">В работе</span>
          <span @click="$store.commit('setStatus', 'completed')" class="completed">Решено</span>
      </div>
    </div>
</template>

<script>

    import {mapState, mapGetters, mapActions} from 'vuex'
    import {gmapApi} from 'vue2-google-maps'

var mapStyles =

[
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 700
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
    }
    ];

    export default {

        data() {
            return {
                mapStyle: {styles: mapStyles},
            }
        },

        computed: {
            ...mapState({
                center: state => state.center,
                selected: state => state.selectedRequest
            }),

            ...mapGetters({
                requests: 'markedRequests',
                totalMarked: 'totalMarked'

            }),

            markers: function() {
                return this.requests.map( (r) => {
                    if (r.status === "completed"){
                        r.icon = { url : "https://image.ibb.co/gqFCNT/greenmark.png"}
                    }
                    else if (r.status === "active") {
                        r.icon = { url : "https://image.ibb.co/bAAe2T/yellowmark.png"}
                    }
                    else if (r.status == "ignored"){
                        r.icon = { url: "https://image.ibb.co/dzxRhT/greymark.png"}
                    }
                    else {
                        r.icon = { url: "https://image.ibb.co/dQBAGo/indigo.png"}
                    }
                    return r
                })
            },

            getIcon(status){
                return {
                    url: "https://image.ibb.co/kNDtwo/green.png"
                }
            }
        },

        methods: {
            ...mapActions({
                select: 'select'
            })
        }
    }


</script>

<style scoped>
    .top {
        padding: auto 0;
        height: 4%;
    }
    .box {
        border-radius: 5px;
    }
    .border {
        padding: 15px;
    }

     .map {
        height: 92%;
    }

    .bottom {
       padding: 10px;
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
