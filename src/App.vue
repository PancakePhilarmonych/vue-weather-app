<template>
  <div id="app">
    <WeatherApp/>
    <AddCityButton @click="openModal"/>
    <AddCityModal ref="add-city-modal"/>
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
  },

  methods: {
    openModal () {
      this.$refs['add-city-modal'].openModal()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
