<template>
  <div
    v-if="show"
    class="backdrop"
    @click.self="closeModal">
    <div class="modal">
      <base-header
        header-text="Choose a city"
        description-text="To find city start typing and pick one from the suggestions"/>

      <body>
        <base-input v-model="cityName"/>
      </body>

      <footer>
        <base-button
          :disabled="!cityName"
          @click="clearCityName"
          inner-text="Clear"/>

        <div class="right-buttons">
          <base-button
            inner-text="Cancel"
            @click="closeModal"/>

          <base-button
            :disabled="!cityName"
            @click="getCityWeatherInfo"
            inner-text="Add"/>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import BaseInput from './Base/BaseInput.vue'
import BaseButton from './Base/BaseButton.vue'
import BaseHeader from './Base/BaseHeader.vue'
import api from '../services/api.js'

export default {
  components: {
    BaseInput,
    BaseButton,
    BaseHeader
  },

  data () {
    return {
      show: false,
      cityName: ''
    }
  },

  methods: {
    openModal () {
      this.show = true
    },

    closeModal () {
      this.show = false
    },

    clearCityName () {
      this.cityName = ''
    },

    getCityWeatherInfo () {
      api.getCityWeather({ q: this.cityName, units: 'metric' })
        .then(response => console.log(response))

      // var axios = require('axios').default

      // var options = {
      //   method: 'GET',
      //   url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      //   params: {
      //     q: this.cityName,
      //     units: 'metric'
      //   },
      //   headers: {
      //     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      //     'x-rapidapi-key': 'ba4325f6a6msha272ceb97485ce3p143fbcjsn2fed1cd0eb0b'
      //   }
      // }

      // axios.request(options).then(function (response) {
      //   console.log(response.data)
      // }).catch(function (error) {
      //   console.error(error)
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
  .backdrop {
    padding: 24px;
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;

    background: rgba(11, 11, 11, 0.5);

    justify-content: center;
    align-items: center;

    .modal {
      width: 751px;

      background: #FFFFFF;

      box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.14),
                  0px 6px 30px rgba(0, 0, 0, 0.12),
                  0px 8px 10px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 24px;

      header {
        margin-bottom: 67px;
      }

      body {
        margin-bottom: 140px;
      }

      footer {
        display: flex;
        justify-content: space-between;

        .right-buttons {
          :last-child {
            margin-left: 31px;
          }
        }
      }
    }
  }
</style>
