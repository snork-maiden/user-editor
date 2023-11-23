<script setup>
import ModalWindow from './ModalWindow.vue'
defineEmits({
  close: null
})
defineProps({
  id: {
    type: Number,
    required: true
  }
});

function deleteUser() {
  
}
</script>

<template>
  <ModalWindow> 
    Are you sure that you want to delete this user?
    <button type="button" @click="deleteUser"> ✅</button>
    <button type="button" @click="$emit('close')"> ❌</button>
  </ModalWindow>
</template>
