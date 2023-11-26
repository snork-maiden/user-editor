<script setup>
import { useUsersStore } from '../stores/users'
import TheAddUser from './TheAddUser.vue'
import UsersList from './UsersList.vue'

const usersStore = useUsersStore()
</script>

<template>
  <TheAddUser class="add" />

  <UsersList v-if="!usersStore.isEmpty" :users-data="usersStore.users" />
  <div class="add-warning" v-else>Добавьте первого пользователя!</div>
</template>
<style scoped lang="scss">
.add {
  margin-bottom: 10vh;
}
.add-warning {
  text-align: center;
  font-size: 1.4em;
}
</style>
