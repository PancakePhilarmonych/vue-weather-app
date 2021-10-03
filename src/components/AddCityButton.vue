<template>
  <button @click="onClick" class="add-city-button">
    +
  </button>
</template>

<script>
export default {
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  .add-city-button {
    cursor: pointer;
    color: white;
    position: fixed;

    bottom: 20px;
    right: 20px;

    width: 56px;
    height: 56px;

    border: none;
    background: #9B51E0;

    border-radius: 50px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14),
                0px 1px 10px rgba(0, 0, 0, 0.12),
                0px 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      background: darken($color: #9B51E0, $amount: 10);
    }

    &:active {
      transform: scale(.95);
    }
  }
</style>
