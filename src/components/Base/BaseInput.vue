<template>
  <input
      class="base-input"
      :type="type"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="onInput"
      @change="onChange">
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Search city'
    }
  }

}
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 1px solid #1B1B1B;
  padding-bottom: 16px;

  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */

  /* Text/Primary */

  color: #1B1B1B;
}
</style>
