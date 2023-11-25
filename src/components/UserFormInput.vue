<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    required: false,
    default: false
  },
  type: {
    type: String,
    required: false,
    default: 'text'
  },
  value: {
    type: [String, null],
    required: false,
    default: null
  }
})

const emit = defineEmits({
  change: String
})

let inputValue = ref(props.value)

watch(inputValue, () => {
  if (!inputValue.value) return

  if (props.type === 'text') {
    inputValue.value = capitalize(inputValue.value)
    emit('change', inputValue.value)
    return
  }

  if (props.type === 'tel') {
    inputValue.value = validatePhone(inputValue.value)
  }

  emit('change', inputValue.value)

  function capitalize(word) {
    word = word.toLowerCase()
    return word[0].toUpperCase() + word.slice(1)
  }
  function validatePhone(input) {
    const phoneRegex = /[^0-9\s\-()+]/
    return input.replace(phoneRegex, '')
  }
})
</script>

<template>
  <label :for="id" class="label"><slot></slot></label>
  <input
    :type="type"
    :name="id"
    :id="id"
    class="input"
    :required="required"
    v-model.trim="inputValue"
  />
</template>
