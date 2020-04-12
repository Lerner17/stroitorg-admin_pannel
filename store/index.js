export const actions = {
  async nuxtServerInit ({ dispatch }, context) {
    await dispatch('user/setUserOnlyServer', context)
  }
}

// plugins
const listPlugins = []

// client-only plugins
if (process.client) {
}

// export plugins
export const plugins = listPlugins
