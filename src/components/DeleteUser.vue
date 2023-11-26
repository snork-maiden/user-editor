<script setup>
import { useUsersStore } from '../stores/users'
import ModalWindow from './ModalWindow.vue'
import MyButton from './MyButton.vue'
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
  <MyButton class="delete" @click="isOpen = true">
    <IconDelete />
  </MyButton>

  <ModalWindow v-if="isOpen" @close="isOpen = false">
    <p class="confirm">Вы уверены, что хотите удалить этого пользователя?</p>
    <div class="buttons">
      <MyButton @click="deleteUser">✅</MyButton>
      <MyButton @click="isOpen = false">❌</MyButton>
    </div>
  </ModalWindow>
</template>

<style scoped lang="scss">
.delete {
  background: none;
  border: 0cap;
}
.confirm {
  justify-self: center;
  margin-bottom: 2em;
  text-align: center;
}

.buttons {
  display: flex;
  width: 100%;
  justify-content: space-around;
  justify-self: center;
  font-size: 1.4em;
  margin-bottom: 1em;
}
</style>
