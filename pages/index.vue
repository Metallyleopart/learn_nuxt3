<template>
  <div>
    <p>ini index pages</p>
    <div class="bg-slate-700 min-h-full text-white">
      <Counter />
    </div>
  </div>
</template>

<script setup>
// ini adalah penggunaan middleware per-page tidak secara global
  definePageMeta({
    middleware: () => {
      console.log('ini middleware');
    },
  });
</script>
