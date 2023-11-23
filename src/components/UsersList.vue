<script setup>
import UsersListItem from './UsersListItem.vue';
defineProps({
  usersData: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <ul class="users" >
    <UsersListItem v-for="user of usersData" :key="user.id" :userData="user"/>
  </ul>
</template>
