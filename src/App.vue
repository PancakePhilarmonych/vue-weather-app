<template>
  <div id="app">
    <WeatherApp/>
    <AddCityButton/>
    <AddCityModal/>
  </div>
</template>

<script>
import WeatherApp from '../src/views/WeatherApp.vue'
import AddCityModal from './components/AddCityModal.vue'
import AddCityButton from './components/AddCityButton.vue'

export default {
  name: 'App',
  components: {
    WeatherApp,
    AddCityModal,
    AddCityButton
  }
}
</script>

<style lang="scss" scoped>
</style>
