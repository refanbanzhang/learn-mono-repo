<script setup lang="ts">
import { useAsyncState } from '@vueuse/core';
import type { Bookmark } from '@my-workspace/shared/api/types';
import { fetchBookmarks } from '@my-workspace/shared/api';
import Header from '@/components/header/index.vue';

const { state: bookmarks, isLoading, error } = useAsyncState<Bookmark[]>(
  fetchBookmarks,
  [],
  { immediate: true }
);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <Header />
    <h2 class="text-2xl font-bold mb-4">书签</h2>
    <div v-if="isLoading" class="text-gray-600">
      正在加载书签...
    </div>
    <div v-else-if="error" class="text-red-600">
      加载书签失败。请稍后重试。
    </div>
    <div v-else-if="bookmarks.length" class="bg-gray-100 p-4 rounded-lg">
      <pre class="text-sm">{{ JSON.stringify(bookmarks, null, 2) }}</pre>
    </div>
    <div v-else class="text-gray-600">
      没有找到书签。
    </div>
  </div>
</template>

<style scoped>
pre {
  @apply text-left whitespace-pre-wrap break-words;
}
</style>