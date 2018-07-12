<template>
  <div id="app" class="container-fluid">
    <TopBar/>
    <Platform/>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import Platform from './components/Platform'

export default {
  name: 'app',
  components: {
    TopBar,
    Platform
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  height:100%;
  font-family: ElektraLightPro;
  font-size: 0.75rem !important;
}

@font-face {
    font-family: ElektraLightPro;
    src: url("assets/Elektra Light Pro Regular.otf") format("opentype");
}

.custom-select {
   background: #fff url("assets/arrow.png") no-repeat right 0.75rem center;
   background-size: 10px 8px;
}

body {
    background-color: #e0e0e0;
    height: 90%;
}

html {
    height: 100%;
}


</style>
