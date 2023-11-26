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
<style scoped lang="scss">
.users {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    list-style: none;
    gap: min(9vw, 5em);
    max-width: 1000px;
}
</style>

