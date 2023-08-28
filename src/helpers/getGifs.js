export async function getGifs(category) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=mr61EXt5Pqir7lYX4wAm9O1Lj11KnO1a&q=${category}&limit=6`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( (element) => ({
        id: element.id,
        url: element.images.downsized_medium.url,
        title: element.title,
    }))

    return gifs;
}