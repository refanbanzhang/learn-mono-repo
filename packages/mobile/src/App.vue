<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Bookmark } from '@my-workspace/shared/api/types';
import { fetchBookmarks } from '@my-workspace/shared/api';

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