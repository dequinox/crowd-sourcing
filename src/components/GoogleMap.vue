<template>
    <div class="box rounded border">
        <div class="map">
            <GmapMap
              :center="center"
              :zoom="15"
              :animation="5"
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
      <div class="bottom">
          <span class="completed">В работе</span>
          <span class="pending">На обсуждении</span>
          <span class="deleted">Не просмотрено</span>
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

            }),

            markers: function() {
                return this.requests.map( (r) => {
                    if (r.status === "completed"){
                        r.icon = { url : "https://image.ibb.co/kNDtwo/green.png"}
                    }
                    else if (r.status === "pending") {
                        r.icon = { url : "https://image.ibb.co/eMX6z8/yellow.png"}
                    }
                    else {
                        r.icon = { url: "https://image.ibb.co/eFrDCT/grey.png"}
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
    .box {
        padding: 10px;
    }

     .map {
        height: 96%;
    }

    .bottom {
       padding: 10px;
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
        background-color: #38B09D;
    }

    .pending::before {
        background-color: #edbb07;
    }

    .deleted::before {
        background-color: #6c6865;
    }
</style>
