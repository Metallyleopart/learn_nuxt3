<template>
  <div>
    <p>Hello world</p>
    <p>{{ count }}</p>
    <button @click="increment()">increment</button>
    <button @click="decrement()">decrement</button>
  </div>
</template>

<script setup>
  const count = ref(0);

  function increment(){
    count.value++;
  }

  function decrement(){
    count.value--;
  }
</script>
