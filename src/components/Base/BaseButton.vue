<template>
  <button
    @click="onClick"
    class="base-button">
    {{ innerText }}
  </button>
</template>

<script>
export default {
  props: {
    innerText: {
      type: String,
      default: 'Button'
    }
  },

  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>
