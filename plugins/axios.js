export default function ({ req, $axios, env, app }) {
  if (app.$cookies.get('__token')) {
    const token = 'Token ' + (app.$cookies.get('__token') || '')
    $axios.setHeader('Authorization', token)
  }
  $axios.setBaseURL(env.API_URL)
}
