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
        <base-input
          v-validate="'onlyLetters|required'"
          name="city"
          v-model="cityName"
          :error="errors.first('city')"/>
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
import { mapActions } from 'vuex'

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
    ...mapActions(['getWeatherInfo']),

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
      this.closeModal()
      this.getWeatherInfo({ city: this.cityName, action: 'add' })
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
      height: 395px;
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
        position: relative;
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
