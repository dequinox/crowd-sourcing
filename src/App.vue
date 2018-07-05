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

}
</style>
