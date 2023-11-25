import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  let users = ref([])
  let maxId = ref(0);
  const isEmpty = computed(() => users.value.length === 0)

  function getUsers() {
    return users.value;
  }

  function addUser(userData) {
    ++maxId.value;
    userData.id = maxId.value;
    users.value.push(userData);
  }

  function deleteUser(id) {
    users.value = users.value.filter(user => user.id !== id)
  }

  function editUser(userData) {
    const userIndex = users.value.findIndex(user => user.id === userData.id);
    console.log(userData, users.value)
    users.value[userIndex] = userData;
  }

  return { users, getUsers, addUser, deleteUser, editUser, isEmpty }
})
