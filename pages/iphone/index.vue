<template>
  <div class="grid grid-cols-4 gap-4">
    <NuxtLink v-for="iphone in iphones" :key="iphone" :to="`/iphone/${iphone}`" class="shadow-xl rounded-md text-center p-5 mt-10">
      <p>{{iphone}}</p>
      <div class="flex justify-center">
        <img width="200" :src="`/images/${iphone}.jpg`" alt="" />
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  // ini merupakan salah satu cara untuk fetch data dari API
  const {data} = useFetch("/api/iphones");
  const iphones = data;

  useHead({
    title: "Nuxt3-Iphones"
  });
  definePageMeta({
    //ketika kita menggunakan anonymus middleware maka kita cukup mengambi nama dari variabel yang ada didalam function tersebut
    middleware:["auth"]
  });
</script>
