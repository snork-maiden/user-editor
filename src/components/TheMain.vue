<script setup>
import { useUsersStore } from '../stores/users';
import TheAddButton from './TheAddButton.vue';
import UsersList from './UsersList.vue';
// import { computed } from "vue";

const usersStore = useUsersStore();

const isEmpty = () => usersStore.isEmpty;
</script>

<template>
  <TheAddButton />

  <UsersList v-if="isEmpty" :users-data="usersStore.users" />
</template>
