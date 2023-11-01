// use state berfungsi menyimpan data sementara
// wajib menggunakan function jika tidak maka tidak akann bisa dipanggil
// kita bisa langsung memanggil nama fungsi tanpa nama file atau folder
export const useCart = () => useState(() => []);
export const useAuth = () =>
  useState(() => ({
    isAuthenticated: false,
    navigateTo: "/login"
  }
));