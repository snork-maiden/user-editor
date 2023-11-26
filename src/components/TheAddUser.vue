<script setup>
import { ref } from 'vue'
import ModalWindow from './ModalWindow.vue'
import UserForm from './UserForm.vue'
import IconAdd from './icons/IconAdd.vue'
import MyButton from './MyButton.vue'

let isOpen = ref(false)
</script>

<template>
  <MyButton @click="isOpen = true" class="add">
    <IconAdd />
  </MyButton>
  <ModalWindow v-if="isOpen" @close="isOpen = false">
    <UserForm @close="isOpen = false" />
  </ModalWindow>
</template>
<style scoped lang="scss">
.add {
  align-self: center;
  margin-bottom: 6vh;
  margin-top: 5vh;
}
</style>

