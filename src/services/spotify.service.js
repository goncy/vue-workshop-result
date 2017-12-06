const BASE_URL = "https://platzi-music-api.now.sh"

const spotifyService = {
  search: function(query, type) {
    const url = `${BASE_URL}/search?q=${query}&type=${type}`
    return fetch(url, { method: "GET" }).then(res => {
      if (res.status !== 200) {
        throw res.statusText
      }
      return res.json()
    })
  }
}

export default spotifyService
