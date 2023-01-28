import axios from 'axios';

const baseUrl = 'https://pixabay.com/api';
const KEY = '33095272-95e44553173d41546482ff06e'

export async function fetchImages(query, page) {
    const response = await axios.get(
      `${baseUrl}/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`
    );
    return response;
  }