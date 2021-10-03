<template>
  <header>
    <h2>{{ headerText }}</h2>
    <p>{{ descriptionText }}</p>
  </header>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
      required: true
    },

    descriptionText: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    color: #1B1B1B;

    h2 {
      margin-bottom: 15px;

      font-weight: bold;
      font-size: 32px;
      line-height: 38px;
    }

    p {
      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
