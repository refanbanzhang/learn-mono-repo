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
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-4">Bookmarks</h2>
    <div v-if="loading" class="text-gray-600">Loading bookmarks...</div>
    <div v-else class="bg-gray-100 p-4 rounded-lg">
      <pre class="text-sm">{{ JSON.stringify(bookmarks, null, 2) }}</pre>
    </div>
  </div>
</template>

<style scoped>
pre {
  @apply text-left whitespace-pre-wrap break-words;
}
</style>