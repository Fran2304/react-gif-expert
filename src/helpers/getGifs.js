export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Up7KE4QmgG8WDbY3UQparGIIjkg1MGIR&q=${category}&limit=10`;
  const response = await fetch(url);

  const { data = [] } = await response.json();
  const gifs = data.map((element) => ({
    id: element.id,
    title: element.title,
    url: element.images.downsized_medium.url,
  }));
  return gifs;
};
