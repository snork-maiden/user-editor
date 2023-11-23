<script setup>
import EditUserModal from './EditUserModal.vue';
import IconEdit from './icons/IconEdit.vue'
import { ref } from 'vue'

let isOpen = ref(false)
</script>

<template>
  <button type="button" @click="isOpen = true">
    <IconEdit />
  </button>
  <EditUserModal v-if="isOpen" @close="isOpen = false" />
</template>
