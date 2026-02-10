import { Gift, GiphyResponse } from "../data/giphyresponse.data";

export const API_KEY = 'JYFliq5Q3HMvcD6QLDTYzXDx6EvzlQfN';

const getRandomGif = async (): Promise<GiphyResponse> => {
  const response = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=goku&rating=g`);
  const data: GiphyResponse = await response.json();
  return data;
}

export const createImageComponent = ( gift: Gift ) => {
  const imageUrl = gift?.images?.original?.url;
  const imageElement = document.createElement('img');
  imageElement.src = imageUrl ?? '';
  imageElement.alt = gift?.slug ?? 'No image found';
  imageElement.style.width = '50%';
  document.body.appendChild(imageElement);
}

const gift = await getRandomGif();
createImageComponent(gift.data ?? {});

