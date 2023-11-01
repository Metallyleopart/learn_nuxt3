<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <!-- untuk menampilkan pesan error tidak perlu .value karena sudah otomtis disimpan pada variabel _error -->
            <div class="bg-red-700 text-white text-center py-2 px-6 rounded-md" v-if="_error">
              {{ _error }}
            </div>
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
            <form @submit.prevent="onSubmit()" class="space-y-4 md:space-y-6">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="bg-gray-50 text-gray-900 sm:text-sm rounded-lg outline-none border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  v-model="form.email" />
                <!-- v-model berguna untuk menampilkan input yang sudah diperoleh -->
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 text-gray-900 sm:text-sm text-white rounded-lg outline-none border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  v-model="form.password" />
                <!-- v-model berguna untuk menampilkan input yang sudah diperoleh -->
              </div>
              <div class="flex items-center justify-between">
                <a href="#" class="text-sm font-medium text-primary-600 text-white">Forgot password?</a>
              </div>
              <button type="submit" class="w-full text-white bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <span v-if="isLoading">Loading...</span>
                <span v-else>Login</span>
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// url dummy
  const url = 'https://reqres.in/api/login';
  const auth = useAuth();

  // form menggunakan reactive
  const form = reactive({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });

  const isLoading = ref(false);
  const _error = ref(null);

  // fungsi async pada onSubmit
  async function onSubmit() {
    // kembalikan value loading
    if (isLoading.value) return;

    isLoading.value = true;
    const { data, error } = await useFetch(url, {
      method: 'POST',
      body: {
        email: form.email,
        password: form.password,
      },
    });
    isLoading.value = false;
    // error handling
    if (error.value) {
      console.log(error.value.data.error);
      _error.value = error.value.data.error;
      return;
    }
    // jika tidak ada error maka push ke index
    console.log(data.value);
    auth.value.isAuthenticated = true;
    navigateTo('/');
  }
</script>
