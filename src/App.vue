<template>
  <div class="weather-app">
    <header>
      <h1>
        World Weather
      </h1>
      <p>
        Watch weather in your current location
      </p>
    </header>
    <body>
      <card-preview size="large"/>
    </body>
    <footer>
      <card-preview size="small"/>
      <card-preview size="small"/>
      <card-preview size="small"/>
      <card-preview size="small"/>
      <card-preview size="small"/>
      <card-preview size="small"/>
      <card-preview size="small"/>
      <card-preview size="small"/>
      <card-preview size="small"/>
    </footer>
  </div>
</template>

<script>
// import BaseButton from '../src/components/BaseButton.vue'
import CardPreview from '../src/components/WeatherCard/CardPreview.vue'

export default {
  name: 'App',
  components: {
    // BaseButton,
    CardPreview
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
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        font-size: 70px;
        line-height: 80px;
        color: #1B1B1B;
        margin-bottom: 32px;
      }

      p {
        font-family: Lato;
        font-style: normal;
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
