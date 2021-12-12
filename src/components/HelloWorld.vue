<script setup lang="ts">
import { ref } from 'vue'
import axios from '../utils/axios'

defineProps<{ msg: string }>()

axios
  .get('/')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

const count = ref(0)
</script>

<template>
  <div>HolleWorld</div>
</template>

<style scoped></style>
