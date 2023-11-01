// ketika menggunakan global middleware maka harus menyertakan .global pada tengah-tengah dari penamaan file
export default defineNuxtRouteMiddleware(() => {
  console.log("ini middleware global");
});
