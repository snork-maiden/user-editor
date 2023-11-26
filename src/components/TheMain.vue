<script setup>
import { useUsersStore } from '../stores/users';
import TheAddUser from './TheAddUser.vue';
import UsersList from './UsersList.vue';

const usersStore = useUsersStore();

const isEmpty = () => usersStore.isEmpty;
</script>

<template>
  <TheAddUser class="add"/>

  <UsersList v-if="isEmpty" :users-data="usersStore.users" />
</template>
<style scoped lang="scss">
.add {
  margin-bottom: 10vh;
}
</style>