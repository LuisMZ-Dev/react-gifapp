

export const getGif = async (category) => { //funcion para consumir la api
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=2k10tbNmGcBdAe7xbaPF38k3WrlcxlGX`
    const resp = await fetch(url)
    const { data }  = await resp.json()//para convertirlo y destructurarlo   
  

  const gifs = data.map( //para hacer el recorrido(bucle) y obtener los datos especificos
    img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
return gifs
  }