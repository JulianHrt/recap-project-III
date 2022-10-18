import {createCharacterCard} from './components/card/card.js';
import {prevPage} from './components/nav-pagination/nav-pagination.js';
import {nextPage} from './components/nav-pagination/nav-pagination.js';

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let searchQuery = '';

export async function fetchCharacters(siteNumber) {
  const url = `https://rickandmortyapi.com/api/character/?page=${siteNumber}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

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
fetchCharacters(1);

prevButton.addEventListener('click', prevPage);
nextButton.addEventListener('click', nextPage);
