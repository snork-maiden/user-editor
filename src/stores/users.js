import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const STORE_NAME = 'users';

export const useUsersStore = defineStore('users', () => {
  let users = ref(getUsers())
  let maxId = ref(0);

  const isEmpty = computed(() => users.value.length === 0)

  function getUsers() {
    const usersJSON = localStorage.getItem(STORE_NAME);
    return usersJSON ? JSON.parse(usersJSON) : [];
  }

  function addUser(userData) {
    ++maxId.value;
    userData.id = maxId.value;
    users.value.push(userData);
    localStorage.setItem(STORE_NAME, JSON.stringify(users.value))
  }

  function deleteUser(id) {
    users.value = users.value.filter(user => user.id !== id)
    localStorage.setItem(STORE_NAME, JSON.stringify(users.value))
  }

  function editUser(userData) {
    const userIndex = users.value.findIndex(user => user.id === userData.id);
    users.value[userIndex] = userData;
    localStorage.setItem(STORE_NAME, JSON.stringify(users.value))
  }

  return { users, addUser, deleteUser, editUser, isEmpty }
})
