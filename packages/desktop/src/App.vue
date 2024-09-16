<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { SECRET_KEY, add, img, icon, fetchBookmarks, Bookmark } from '@my-workspace/shared';

const bookmarks = ref<Bookmark[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    bookmarks.value = await fetchBookmarks();
  } catch (error) {
    console.error('Failed to fetch bookmarks:', error);
  }
  loading.value = false;
});
</script>

<template>
  <div>
    <h1>Hello world!</h1>
    <div>add(1, 2): {{ add(1, 2) }}</div>
    <div>SECRET_KEY: {{ SECRET_KEY }}</div>
    <img style="width: 400px" :src="img" alt="Imported image" />
    <img :src="icon" alt="Imported icon" />
    <h2>Bookmarks</h2>
    <div v-if="loading">Loading bookmarks...</div>
    <div v-else>
      <pre>{{ JSON.stringify(bookmarks, null, 2) }}</pre>
    </div>
  </div>
</template>

<style scoped>
pre {
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>