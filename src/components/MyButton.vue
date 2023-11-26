<template>
  <button type="button" class="button">
    <slot></slot>
  </button>
</template>
<style scoped lang="scss">
.button {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  transition: 0.2s filter;
  &:hover, &:active {
    filter: brightness(0.8)
  }
}
</style>
