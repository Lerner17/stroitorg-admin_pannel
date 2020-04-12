export default {
  async setUserOnlyServer ({ commit }, { $axios }) {
    let user = null
    try {
      await $axios.$get('http://89.223.89.167/api/v1/admin/auth/user').then((data) => {
        user = {
          token: data.token,
          user: data.user
        }
      })
    } catch (err) {
      console.log(err)
    }
    commit('setUser', user)
  },
  async loginUser ({ commit }, { username, password }) {
    await this.$axios.$post('/auth/login', { username, password }, { headers: {} }).then((data) => {
      if (data.success) {
        commit('setUser', {
          token: data.token,
          user: data.user
        })
        this.$cookies.set('__token', data.token)
        this.$router.push('/')
      }
    })
  }
}
