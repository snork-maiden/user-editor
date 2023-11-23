<script setup>
import { computed } from 'vue';

const props = defineProps({
  userData: {
    type: Object,
    required: true
  }
});

let name = computed(() => {
  const user = props.userData;
  if (user.middleName) {
    return [user.firstName, user.middleName, user.lastName].join(' ');
  }
  return [user.firstName, user.lastName].join(' ');
});

//  class User {
//   constructor(firstName, middleName, lastName, email, phone, birthDate) {
//     this.firstName = firstName
//     this.middleName = middleName
//     this.lastName = lastName
//     this.email = email
//     this.phone = phone
//     this.birthDate = birthDate
//   }
// }
</script>

<template>
  <li class="user">
    <h2 class="user__name">{{ name }}</h2>
    <div class="user__birthday">{{ userData.birthday }}</div>
    <h3 class="contacts">Contacts:</h3>
    <ul class="contacts__list">
      <li class="contacts__item"><a :href="'mailto:' + userData.email">{{ userData.email }}</a></li>
      <li class="contacts__item"><a :href="'tel:' + userData.phone">{{ userData.phone }}</a></li>
    </ul>
    
  </li>
</template>

<!-- const props = defineProps({
    status: {
      type: String,
      required: true,
  
      validator: (value) => {
        return ['syncing', 'synced', 'version-conflict', 'error'].includes(
          value
        )
      }
    }
  }) -->
