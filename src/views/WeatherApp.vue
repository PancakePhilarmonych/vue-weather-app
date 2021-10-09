<template>
  <div class="weather-app">
    <header>
      <h1>
        World Weather
      </h1>
      <p class="main-descriptionn">
        Watch weather in your current location
      </p>
    </header>

    <body>
      <weather-card v-if="currentCity.length" size="large"/>
    </body>
    <footer>
      <weather-card
        v-for="city in cities"
        :key="city.name"
        :name="city.name"
        :country="city.country"
        :weather="city.weather"
        :humidity="city.humidity.toString()"
        :temperature="city.temperature"
        :created-date="city.created_date"
        size="small"/>
    </footer>
  </div>
</template>

<script>
import WeatherCard from '../components/WeatherCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    WeatherCard
  },

  computed: {
    ...mapState(['cities', 'currentCity'])
  }
}
</script>

<style lang="scss" scoped>
  .weather-app {
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    header {
      text-align: center;

      h1 {
        font-weight: 300;
        font-size: 70px;
        line-height: 80px;
        color: #1B1B1B;
        margin-bottom: 32px;
      }

      .main-descriptionn {
        font-weight: normal;
        font-size: 24px;
        line-height: 24px;

        color: #767676;
      }

      margin-bottom: 22px;
    }

    body {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 77px;
    }

    footer {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 40px;

      @media (min-width: 1224px) and (max-width: 1580px) {
        grid-template-columns: 1fr 1fr 1fr;
      }

      @media (min-width: 400px) and (max-width: 1224px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: 780px) {
        grid-template-columns: 1fr;
        width: 100%;
      }
    }
  }
</style>
