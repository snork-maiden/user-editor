<script setup>
import MyButton from './MyButton.vue'
import IconClose from './icons/IconClose.vue'

defineEmits({
  close: null
})
</script>

<template>
  <Teleport to="body">
    <div class="wrapper" @click.self="$emit('close')">
      <div class="modal">
        <MyButton @click="$emit('close')" class="close-button"><IconClose /></MyButton>
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
  align-items: center;
  padding: 1em;
}

.close-button {
  justify-self: end;
}
</style>
