<template>
  <div class="weather-app">
    <header>
      <h1>
        World Weather
      </h1>
    </header>

    <body>
      <div class="current-location-card">
        <template v-if="currentPositionWeather" >
          <p class="description">
            Watch weather in your current location
          </p>
          <weather-card
            current-location-card
            size="large"
            :key="currentPositionWeather.name"
            :name="currentPositionWeather.name"
            :country="currentPositionWeather.country"
            :weather="currentPositionWeather.weather"
            :humidity="currentPositionWeather.humidity.toString()"
            :temperature="currentPositionWeather.temperature"
            :created-date="currentPositionWeather.created_date"
            @onReloadClickHandler="updateCard"/>
        </template>

          <base-button
            v-else
            inner-text="Get Current Position Weather"
            @click="getPositionAndWeather">
          </base-button>
      </div>

      <div class="all-cards">
        <weather-card
          v-for="city in cities"
          :key="city.name"
          :name="city.name"
          :country="city.country"
          :weather="city.weather"
          :humidity="city.humidity.toString()"
          :temperature="city.temperature"
          :created-date="city.created_date"
          size="small"
          @onReloadClickHandler="updateCard"/>
      </div>
    </body>
  </div>
</template>

<script>
import WeatherCard from '../components/WeatherCard.vue'
import BaseButton from '../components/Base/BaseButton.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',

  components: {
    WeatherCard,
    BaseButton
  },

  data () {
    return {
      lat: 0,
      long: 0
    }
  },

  methods: {
    ...mapActions(['getWeatherByCity', 'getWeatherByPosition', 'removeCityByName']),

    updateCard ({ currentLocationCard = false, name = '' }) {
      currentLocationCard
        ? this.getPositionAndWeather()
        : this.getWeatherByCity({ city: name, action: 'update' })
    },

    getPositionAndWeather () {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude.toFixed(2)
        const lon = position.coords.longitude.toFixed(2)

        this.getWeatherByPosition({ lat, lon })
      })
    }
  },

  computed: {
    ...mapState(['cities', 'currentPositionWeather'])
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
      }

      margin-bottom: 22px;
    }

    body {
      width: 100%;

      .current-location-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 77px;

        .description {
          text-align: center;
          font-family: Lato;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 24px;

          color: #767676;

          margin-bottom: 25px;
        }
      }

      .all-cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 40px;

        & > * {
          margin: auto;
        }

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

        padding-bottom: 70px;
      }
    }
  }
</style>
