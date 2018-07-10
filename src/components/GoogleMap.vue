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
          <span @click="$store.commit('setStatus', 'completed')" class="completed">В работе</span>
          <span @click="$store.commit('setStatus', 'pending')" class="pending">На обсуждении</span>
          <span @click="$store.commit('setStatus', 'deleted')" class="deleted">Не просмотрено</span>
      </div>
    </div>
</template>

<script>

    import {mapState, mapGetters, mapActions} from 'vuex'
    import {gmapApi} from 'vue2-google-maps'

    var mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
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
                        r.icon = { url : "https://image.ibb.co/j7RghT/green2.png"}
                    }
                    else if (r.status === "pending") {
                        r.icon = { url : "https://image.ibb.co/kQNbGo/yellow2.png"}
                    }
                    else {
                        r.icon = { url: "https://image.ibb.co/k3z1hT/purple.png"}
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
        padding: 10px;
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

    .completed::before {
        background-color: #27ae60;
    }

    .pending::before {
        background-color: #f2c94c;
    }

    .deleted::before {
        background-color: #511a85;
    }
</style>
