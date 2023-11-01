// ini merupakan salah satu cara menggunakan middleware secara anonymus dan kita bisa langsung mengambil nama dari variabel yang ada didalam function-nya
export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth();
  return auth.value.isAuthenticated;
});
