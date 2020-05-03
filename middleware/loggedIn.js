export default function ({ store, redirect, env }) {
  if (store.getters['user/getUser'] === null) {
    return redirect('/admin/auth/login')
  }
}
