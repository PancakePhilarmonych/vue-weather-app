<template>
  <input
      v-model="copyValue"
      class="base-input"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder">
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: 'Search city'
    },

    type: {
      type: String,
      default: 'text'
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    copyValue: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .base-input {
    width: 100%;
    height: 40px;

    padding-bottom: 16px;

    outline: none;
    border: none;
    border-bottom: 1px solid #1B1B1B;

    font-size: 24px;
    line-height: 24px;
    color: #1B1B1B;
  }
</style>
