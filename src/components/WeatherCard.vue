<template>
  <div
    class="weather-card"
    :class="CardSizeClass">

    <base-header
      headerText="Moscow, RU"
      descriptionText="Your current location"/>

    <body>
      <div class="weather-info">
        <base-row
          titleText="Weather"
          infoText="Clouds"/>

        <base-row
          titleText="Temperature"
          infoText="7 °C"/>

        <base-row
          titleText="Humidity"
          infoText="45 %"/>
      </div>

      <div class="refresh-time">
        7 minutes ago
      </div>
    </body>

    <footer>
      <base-button inner-text="Reload"/>

      <base-button
        v-if="canBeRemoved"
        inner-text="Remove"/>
    </footer>
  </div>
</template>

<script>
import BaseRow from './Base/BaseRow.vue'
import BaseButton from './Base/BaseButton.vue'
import BaseHeader from './Base/BaseHeader.vue'

export default {
  props: {
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

  computed: {
    CardSizeClass () {
      return `weather-card__${this.size}`
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
