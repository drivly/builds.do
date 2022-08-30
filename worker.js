export default {
  fetch: async req => {
    const { pathname } = new URL(req.url)
    return fetch('https://esb.denoflare.dev/https:/' + pathname)
  }
}
