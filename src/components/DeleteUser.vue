<script setup>
import { useUsersStore } from '../stores/users'
import ModalWindow from './ModalWindow.vue'
import IconDelete from './icons/IconDelete.vue'
import { ref } from 'vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const usersStore = useUsersStore()

let isOpen = ref(false)

function deleteUser() {
  usersStore.deleteUser(props.id)
  isOpen.value = false
}
</script>

<template>
  <button type="button" @click="isOpen = true">
    <IconDelete />
  </button>
  
  <ModalWindow v-if="isOpen" @close="isOpen = false">
    Are you sure that you want to delete this user?
    <button type="button" @click="deleteUser">✅</button>
    <button type="button" @click="isOpen = false">❌</button>
  </ModalWindow>
</template>
