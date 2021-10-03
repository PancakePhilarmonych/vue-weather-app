<template>
  <div class="weather-card-preview" :class="CardSizeClass">
    <header>
      <h2>Moscow, RU</h2>
      <p>Your current location</p>
    </header>

    <body>
      <div class="row">
        <p class="title">Weather</p>
        <p class="info">Clouds</p>
      </div>
      <div class="row">
        <p class="title">Temperature</p>
        <p class="info">7 °C</p>
      </div>
      <div class="row">
        <p class="title">Humidity</p>
        <p class="info">45 %</p>
      </div>

      <div class="refresh-time">
        7 minutes ago
      </div>
    </body>

    <footer>
      <base-button inner-text="Reload"/>
      <base-button v-if="canBeRemoved" inner-text="Remove"/>
    </footer>
  </div>
</template>

<script>
import BaseButton from '../BaseButton.vue'

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
    BaseButton
  },

  computed: {
    CardSizeClass () {
      return `weather-card-preview__${this.size}`
    }
  }

}
</script>

<style scoped lang="scss">
.weather-card-preview {
  background: white;
  padding: 24px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(10, 10, 10, 0.25);
  border-radius: 6px;
  height: 393px;

  header {
    h2 {
      margin-bottom: 15px;

      font-weight: bold;
      font-size: 32px;
      line-height: 38px;

      color: #1B1B1B;
    }

    p {
      font-family: Lato;
      font-size: 18px;
      line-height: 24px;

      color: #1B1B1B;
    }

    margin-bottom: 40px;
  }

  body {
    .row {
      display: flex;
      justify-content: space-between;
      padding: 16px 0 12px 0;
      border-bottom: 1px solid #C4C4C4;
    }

    .refresh-time {
      display: flex;
      justify-content: flex-end;

      margin-top: 8px;

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
