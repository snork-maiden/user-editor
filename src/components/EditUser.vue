<script setup>
import ModalWindow from './ModalWindow.vue';
import UserForm from './UserForm.vue';
import IconEdit from './icons/IconEdit.vue'
import { ref } from 'vue'

defineProps({
  user: {
    type: Object,
    required: true
  },
})
let isOpen = ref(false)
</script>

<template>
  <button type="button" @click="isOpen = true">
    <IconEdit />
  </button>
  <ModalWindow v-if="isOpen" @close="isOpen = false" >
    <UserForm :user="user" @close="isOpen = false"/>
  </ModalWindow>
</template>
