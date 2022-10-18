import {cardContainer} from './components/card/card.js';
import {createCharacterCard} from './components/card/card.js';

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const url = 'https://rickandmortyapi.com/api/character/';

// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

async function fetchApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error();
    }

    data.results.forEach(result => {
      createCharacterCard(result);
    });
  } catch (error) {
    console.error('Fetch was unsucessfull');
    console.error(error);
  }
}

fetchApi();
