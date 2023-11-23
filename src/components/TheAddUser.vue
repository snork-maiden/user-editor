<script setup>
import { ref } from 'vue'
import ModalWindow from './ModalWindow.vue'
import UserForm from './UserForm.vue'

let isOpen = ref(false)
</script>

<template>
  <button type="button" @click="isOpen = true">+</button>
  <ModalWindow v-if="isOpen" @close="isOpen = false">
    <UserForm />
  </ModalWindow>
</template>
