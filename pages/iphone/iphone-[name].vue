<template>
  <div>
    <p class="text-center">Iphone {{ name }}</p>
    <div class="flex justify-center">
      <img width="200" :src="`/images/iphone-${route.params.name}.jpg`" alt="" />
    </div>
    <button @click="addToCart()" class="bg-red-600 px-6 py-2 text-white block mt-6 mx-auto">
      <span v-if="isInCart()">Remove cart</span>
      <span v-else>Add to cart</span>
    </button>
  </div>
</template>

<script setup>
  const route = useRoute();

  // fungsi untuk mengganti - menjadi spasi
  const name = computed(() => {
    return route.params.name.replaceAll('-', ' ');
  });

  // fungsi untuk menampilkan nama Iphone
  const fullName = computed(() => {
    return `Iphone-${route.params.name}`;
  });

  // fungsi cart dari composable
  const cart = useCart();
  // fungsi jika ada item didalam cart
  function isInCart() {
    return !!cart.value.find((ct) => ct.name === fullName.value);
  }

  // fungsi menambah ke cart
  function addToCart() {
    // jika tidak ada dalam cart maka tambah
    if (!isInCart()) {
      cart.value.push({
        name: `Iphone-${route.params.name}`,
      });
      // jika sudah ada maka filter dan cari jika dapat maka akan membuat false dan terlempar
    } else {
      cart.value = cart.value.filter((ct) => ct.name !== fullName.value)
    }
    console.log(isInCart());
    console.log(cart.value.length);
  }

  // berfungsi menampilkan head pada setiap halaman
  useHead({
    title: `Iphone - ${route.params.name}`,
  });
</script>
