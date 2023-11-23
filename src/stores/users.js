import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  // let users = ref([])
  let users = ref([
    {
      firstName: 'Ivan',
      middleName: 'Sergeevich',
      lastName: 'Filatov',
      phone: '+78094433435',
      email: 'aaa@a.com',
      birthDate: '11.06.1886',
      id: 1
    },
    {
      firstName: 'Ivan',
      middleName: 'Sergeevich',
      lastName: 'Filatov',
      phone: '+78094433435',
      email: 'aaa@a.com',
      birthDate: '11.06.1886',
      id: 2
    },
    {
      firstName: 'Ivan',
      middleName: 'Sergeevich',
      lastName: 'Filatov',
      phone: '+78094433435',
      email: 'aaa@a.com',
      birthDate: '11.06.1886',
      id: 3
    },
  ])
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
    if (isEmpty.value) return;

    users.value = users.value.filter(user => user.id !== id)
  }

  function editUser(userData) {
    if (isEmpty.value) return;

    const userIndex = users.value.findIndex(user => user.id === userData.id);
    users.value[userIndex] = userData;
  }

  return { users, getUsers, addUser, deleteUser, editUser, isEmpty }
})
