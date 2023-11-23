<script setup>
defineProps({
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
</script>

<template>
  <label :for="id" class="label"><slot></slot></label>
  <input :type="type" :name="id" :id="id" class="input" :required="required" :value="value" />
</template>

