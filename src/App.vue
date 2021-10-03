<template>
  <div id="app">
    <WeatherApp/>
    <!-- <NewWeatherButton/> -->
    <AddNewCityModal/>
  </div>
</template>

<script>
import WeatherApp from '../src/views/WeatherApp.vue'
import AddNewCityModal from './components/NewCityModal.vue'

export default {
  name: 'App',
  components: {
    WeatherApp,
    AddNewCityModal
  }
}
</script>

<style lang="scss" scoped>
</style>
