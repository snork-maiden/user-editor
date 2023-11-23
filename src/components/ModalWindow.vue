<script setup>
defineEmits({
  close: null
})
</script>

<template>
  <Teleport to="body">
    <div class="wrapper" @click.self="$emit('close')">
      <div class="modal">
        <button type="button" @click="$emit('close')">Close</button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
<style scoped>
.wrapper {
  position: fixed;
  left: 0;
  top: 0;

  z-index: 500;

  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);

  display: grid;
  place-items: center;
}

.modal {
  width: min(700px, 90vw);
  min-height: 30vh;
  background-color: #fff;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
</style>
