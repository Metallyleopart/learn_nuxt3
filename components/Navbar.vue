<template>
  <div>
    <nav class="flex justify-between px-5 bg-slate-700 text-white py-3">
      <div class="space-x-4">
        <nuxtLink to="/">Index</nuxtLink>
        <nuxtLink to="/about">About</nuxtLink>
        <nuxtLink to="/iphone">Iphone</nuxtLink>
      </div>
      <div class="flex">
        <p>cart ({{ cart.length }})</p>
        <div v-if="auth.isAuthenticated">
          <nuxtLink to="/profile">Profile</nuxtLink>
          <button class="ml-2" @click="logout()">Logout</button>
        </div>
        <nuxtLink v-else to="/login">Login</nuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
  const cart = useCart();
  const auth = useAuth();

  function logout() {
    auth.value.isAuthenticated = false;
  }
</script>
