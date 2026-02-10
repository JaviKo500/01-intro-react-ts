import type { Gift, GiphyResponse } from "../data/giphyresponse.data";

const API_KEY = 'JYFliq5Q3HMvcD6QLDTYzXDx6EvzlQfN';

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=goku&rating=g`
);

myRequest.then((response) => response.json())
  .then(({ data }: GiphyResponse) => createImageComponent(data ??{}))
  .catch(console.error)
  .finally(() => console.log('continue with my life'));

  const createImageComponent = ( gift: Gift ) => {
    const imageUrl = gift?.images?.original?.url;
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl ?? '';
    imageElement.alt = gift?.slug ?? 'No image found';
    imageElement.style.width = '50%';
    document.body.appendChild(imageElement);
  }