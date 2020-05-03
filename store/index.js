export const actions = {
  async nuxtServerInit ({ dispatch }, context) {
    await dispatch('user/setUserOnlyServer', context).catch(error => console.error(error))
  }
}

// plugins
const listPlugins = []

// client-only plugins
if (process.client) {
}

// export plugins
export const plugins = listPlugins
