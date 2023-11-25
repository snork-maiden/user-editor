<script setup>
import { computed } from 'vue'
import EditUser from './EditUser.vue'
import DeleteUser from './DeleteUser.vue'

const props = defineProps({
  userData: {
    type: Object,
    required: true
  }
})

let name = computed(() => {
  const user = props.userData
  if (user.middleName) {
    return [user.firstName, user.middleName, user.lastName].join(' ')
  }
  return [user.firstName, user.lastName].join(' ')
})

function formatDate(dateString) {
  let date = new Date(dateString)

  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  return date.toLocaleDateString('ru-RU', options)
}
</script>

<template>
  <li class="user">
    <h2 class="user__name">{{ name }}</h2>
    <div class="user__birthday">{{ 'Дата рождения: ' + formatDate(userData.birthDate) }}</div>
    <h3 class="contacts">Contacts:</h3>

    <ul class="contacts__list">
      <li class="contacts__item">
        <a :href="'mailto:' + userData.email">{{ userData.email }}</a>
      </li>
      <li class="contacts__item">
        <a :href="'tel:' + userData.phone">{{ userData.phone }}</a>
      </li>
    </ul>

    <EditUser :user="userData" />
    <DeleteUser :id="userData.id" />
  </li>
</template>
