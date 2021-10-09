<template>
  <button
    @click="onClick"
    class="base-button"
    :class="classes">
    {{ innerText }}
  </button>
</template>

<script>
export default {
  props: {
    innerText: {
      type: String,
      default: 'Button'
    },

    danger: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      return { danger: this.danger }
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
