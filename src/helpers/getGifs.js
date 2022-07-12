
export const getGifs = async (category, quantity=1) =>{

    const API_KEY = 'qX40XdVsBBQ8NJqo7yhe108Xblr4GNoA';
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${quantity}&offset=0&rating=g&lang=en`;
  
    const resp = await fetch(url);
  
    const { data } = await resp.json()
  
    const gifs = data.map(img => (
      {
        id: img.id,
        title: img.title,
        url: img.images.original.url
      }
    ))
  
    console.log(gifs);
      return gifs;
  }