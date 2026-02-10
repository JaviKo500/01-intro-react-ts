import type { GiphyResponse } from "../data/giphyresponse.data";
import { API_KEY, createImageComponent } from "./11-async-await";



const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=goku&rating=g`
);

myRequest.then((response) => response.json())
  .then(({ data }: GiphyResponse) => createImageComponent(data ??{}))
  .catch(console.error)
  .finally(() => console.log('continue with my life'));