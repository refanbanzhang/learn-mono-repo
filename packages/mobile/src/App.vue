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
  <div class="py-4">
    <van-button type="primary">Primary</van-button>
    <div class="section">
      <div class="cell">最近使用</div>
      <div class="cell">我的收藏</div>
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 0 32px;
}

.cell {
  flex: 1;
  height: 160px;
  border-radius: 24px;
  background: blueviolet;

  padding: 24px;
  font-size: 30px;
  font-weight: 600;
  line-height: 42px;
}

pre {
  @apply text-left whitespace-pre-wrap break-words;
}
</style>