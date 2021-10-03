<template>
  <div class="base-row">
    <p class="title">{{ titleText }}</p>
    <p class="info">{{ infoText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    titleText: {
      type: String,
      required: true
    },

    infoText: {
      type: String,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>
  .base-row {
    display: flex;
    justify-content: space-between;
    padding: 16px 0 12px 0;
    border-bottom: 1px solid #C4C4C4;
  }
</style>
