<template>
  <div
    class="weather-card"
    :class="cardSizeClass">

    <base-header
      :headerText="`${name}, ${country}`"
      descriptionText="Your current location"/>

    <body>
      <div class="weather-info">
        <base-row
          titleText="Weather"
          :infoText="weather"/>

        <base-row
          titleText="Temperature"
          :infoText="`${Math.floor(temperature)} °C`"/>

        <base-row
          titleText="Humidity"
          :infoText="humidity"/>
      </div>

      <div :key="timeSince" class="refresh-time">
        {{ timeSince }}
      </div>
    </body>

    <footer>
      <base-button
        inner-text="Reload"
        @click="updateCard"/>

      <base-button
        v-if="canBeRemoved"
        @click="removeCard"
        inner-text="Remove"/>
    </footer>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import { mapActions } from 'vuex'

import BaseRow from './Base/BaseRow.vue'
import BaseButton from './Base/BaseButton.vue'
import BaseHeader from './Base/BaseHeader.vue'

export default {
  props: {
    name: {
      type: String,
      required: true
    },

    country: {
      type: String,
      required: true
    },

    weather: {
      type: String,
      required: true
    },

    humidity: {
      type: String,
      required: true
    },

    temperature: {
      type: Number,
      required: true
    },

    createdDate: {
      type: String,
      required: true
    },

    size: {
      type: String,
      default: 'small'
    },

    canBeRemoved: {
      type: Boolean,
      default: false
    }
  },

  components: {
    BaseButton,
    BaseRow,
    BaseHeader
  },

  data () {
    return {
      timeSince: ''
    }
  },

  mounted () {
    this.updateTimeSince()

    setInterval(() => {
      this.updateTimeSince()
    }, 60000)
  },

  computed: {
    cardSizeClass () {
      return `weather-card__${this.size}`
    }
  },

  methods: {
    ...mapActions(['getWeatherInfo', 'removeCityByName']),

    updateCard () {
      this.getWeatherInfo({ city: this.name, action: 'update' })
    },

    removeCard () {
      this.removeCityByName(this.name)
    },

    updateTimeSince () {
      this.timeSince = DateTime.fromISO(this.createdDate).toRelative()
    }
  },

  watch: {
    createdDate (newValue) {
      this.updateTimeSince()
    }
  }

}
</script>

<style scoped lang="scss">
.weather-card {
  padding: 24px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(10, 10, 10, 0.25);
  border-radius: 6px;
  height: 393px;

  header {
    margin-bottom: 40px;
  }

  body {
    .weather-info {
      margin-bottom: 8px;
    }

    .refresh-time {
      display: flex;
      justify-content: flex-end;
      font-size: 16px;
      line-height: 24px;
      color: #A8A8A8;
    }

    margin-bottom: 34px;
  }

  footer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  &__small {
    width: 350px;

    @media (max-width: 780px) {
      width: 100%;
    }
  }

  &__large {
    width: 824px;

    @media (max-width: 860px) {
      width: 740px;
    }

    @media (max-width: 780px) {
      width: 100%;
    }
  }
}

</style>
