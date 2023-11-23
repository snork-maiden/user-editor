<script setup>
import { useUsersStore } from '../stores/users';
import TheAddUser from './TheAddUser.vue';
import UsersList from './UsersList.vue';
// import { computed } from "vue";

const usersStore = useUsersStore();

const isEmpty = () => usersStore.isEmpty;
</script>

<template>
  <TheAddUser />

  <UsersList v-if="isEmpty" :users-data="usersStore.users" />
</template>
