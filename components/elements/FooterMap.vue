<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const mapboxMap = ref()

const mapCenter = ref([-79.4726, 43.8067])
</script>

<template>
  <MapboxMap
    ref="mapboxMap"
    style="height: 400px; width: 100%; max-width: 1130px; border-radius: 32px"
    map-style="mapbox://styles/mapbox/streets-v11"
    :center="mapCenter"
    :zoom="15"
    access-token="pk.eyJ1IjoicGVyb2dpZXNsYW5kIiwiYSI6ImNsaTh1ZnR3bzN6cWczZW50ano0OG5mbXgifQ.VVzvlyLK37iQ66PO4xakWA"
  >
    <MapboxMarker :lng-lat="mapCenter" />
  </MapboxMap>
</template>
