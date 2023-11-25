<script setup>
import { useUsersStore } from '../stores/users'
import UserFormInput from './UserFormInput.vue'
import { ref } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: false
  }
})

const emit = defineEmits({
  close: null
})

const usersStore = useUsersStore()

const formDataTemplate = {
  firstName: '',
  middleName: '',
  lastName: '',
  phone: '',
  email: '',
  birthDate: ''
}
const formData = ref({ ...props.user } || formDataTemplate)

function submitForm() {
  emit('close')
  if (props.user) {
    usersStore.editUser({ ...formData.value, ...props.user.id })
    return
  }
  usersStore.addUser(formData.value)
}
</script>

<template>
  <form @submit.prevent="submitForm($event)" autocomplete="on">
    <UserFormInput
      id="lastName"
      required
      :value="user?.lastName"
      @change="(value) => (formData.lastName = value)"
    >
      Фамилия
    </UserFormInput>
    <UserFormInput
      id="firstName"
      required
      :value="user?.firstName"
      @change="(value) => (formData.firstName = value)"
    >
      Имя
    </UserFormInput>
    <UserFormInput
      id="middleName"
      :value="user?.middleName"
      @change="(value) => (formData.middleName = value)"
    >
      Отчество (при наличии)
    </UserFormInput>
    <UserFormInput
      id="email"
      :value="user?.email"
      type="email"
      required
      @change="(value) => (formData.email = value)"
      >E-mail</UserFormInput
    >
    <UserFormInput
      id="phone"
      :value="user?.phone"
      type="tel"
      required
      @change="(value) => (formData.phone = value)"
      >Телефон</UserFormInput
    >
    <UserFormInput
      id="birthDate"
      :value="user?.birthDate"
      type="date"
      required
      @change="(value) => (formData.birthDate = value)"
      >Дата рождения</UserFormInput
    >
    <button type="submit">Отправить</button>
  </form>
</template>
