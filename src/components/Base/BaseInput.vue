<template>
  <div class="base-input">
    <input
      v-model="copyValue"
      :class="classes"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder">

      <span class="error-message">
        {{ error }}
      </span>
  </div>

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
    },

    error: {
      type: String,
      default: ''
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
    },

    classes () {
      return { error: this.error }
    }
  }

}
</script>

<style lang="scss" scoped>
  .base-input {
    position: relative;

    input {
      width: 100%;
      height: 40px;
      outline: none;
      border: none;
      font-size: 24px;
      line-height: 24px;
      color: #1B1B1B;
      border-bottom: 1px solid #1B1B1B;
      padding-bottom: 16px;

      &.error {
        border-bottom: 1px solid #FF0101;
      }
    }

    >.error-message {
      color: red;
      top: 50px;
      left: 0px;
      position: absolute;
    }

  }
</style>
