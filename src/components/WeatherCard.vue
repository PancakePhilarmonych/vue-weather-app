<template>
  <div
    class="weather-card"
    :class="cardSize">

    <base-header
      :headerText="cardTitle"
      :descriptionText="cardDescription"/>

    <body>
      <div class="weather-info">
        <base-row
          titleText="Weather"
          :descriptionText="weather"/>

        <base-row
          titleText="Temperature"
          :descriptionText="`${Math.floor(temperature)} °C`"/>

        <base-row
          titleText="Humidity"
          :descriptionText="humidity"/>
      </div>

      <div :key="timeSince" class="refresh-time">
        {{ timeSince }}
      </div>
    </body>

    <footer>
      <base-button
        inner-text="Reload"
        @click="onReloadClick"/>

      <base-button
        v-if="canBeRemoved"
        @click="removeCard"
        inner-text="Remove"/>
    </footer>
  </div>
</template>

<script>
import { DateTime } from 'luxon'
import { mapMutations } from 'vuex'

import BaseRow from './Base/BaseRow.vue'
import BaseButton from './Base/BaseButton.vue'
import BaseHeader from './Base/BaseHeader.vue'

export default {
  props: {
    name: {
      type: String,
      default: 'None'
    },

    country: {
      type: String,
      default: 'None'
    },

    weather: {
      type: String,
      default: 'None'
    },

    humidity: {
      type: String,
      default: '0 %'
    },

    temperature: {
      type: Number,
      default: 0
    },

    createdDate: {
      type: String,
      default: Date.now().toString()
    },

    currentLocationCard: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: 'small'
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
    cardSize () {
      return `weather-card__${this.size}`
    },

    canBeRemoved () {
      return !this.currentLocationCard
    },

    cardTitle () {
      return this.currentLocationCard
        ? `${this.name}, ${this.country}`
        : this.name
    },

    cardDescription () {
      return this.currentLocationCard
        ? 'Your current location'
        : this.getRegionName(this.country)
    }
  },

  methods: {
    ...mapMutations(['remove']),

    onReloadClick () {
      this.$emit('onReloadClickHandler', {
        currentLocationCard: this.currentLocationCard,
        name: this.name
      })
    },

    getRegionName (name) {
      return new Intl.DisplayNames(['en'], { type: 'region' }).of(name)
    },

    removeCard () {
      this.remove(this.name)
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
      width: 100%;
    }
  }
}

</style>
