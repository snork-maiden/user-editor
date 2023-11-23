<script setup>
import UserFormInput from './UserFormInput.vue'

defineProps({
  user: {
    type: Object,
    required: false
  }
})

// заменить в пропсах выше айди на весь объект
</script>

<template>
  <form>
    <UserFormInput id="lastName" required :value="user?.lastName"> Фамилия </UserFormInput>
    <UserFormInput id="firstName" required :value="user?.firstName"> Имя </UserFormInput>
    <UserFormInput id="middleName" :value="user?.middleName">
      Отчество (при наличии)
    </UserFormInput>
    <UserFormInput id="email" :value="user?.email" type="email" required>E-mail</UserFormInput>
    <UserFormInput id="phone" :value="user?.phone" type="tel" required>Телефон</UserFormInput>
    <UserFormInput id="birthDate" :value="user?.birthDate" type="date" required
      >Дата рождения</UserFormInput
    >
    <button type="submit">Отправить</button>
  </form>
</template>

