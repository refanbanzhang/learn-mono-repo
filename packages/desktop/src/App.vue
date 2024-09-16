<script setup lang="ts">
import { SECRET_KEY, add, img } from '@my-workspace/shared';
</script>

<template>
  <div>
    <h1>Hello world!</h1>
    <div>add(1, 2): {{ add(1, 2) }}</div>
    <div>SECRET_KEY: {{ SECRET_KEY }}</div>
    <img style="width: 400px" :src="img" alt="Imported image" />
  </div>
</template>