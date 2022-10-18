import {fetchCharacters} from '../../index.js';
const pagination = document.querySelector('[data-js="pagination"]');
let currentPage = 1;
let maxPage = 42;
pagination.textContent = `${currentPage} / ${maxPage}`;

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    fetchCharacters(currentPage);
    pagination.textContent = `${currentPage} / ${maxPage}`;
  }
}

function nextPage() {
  if (currentPage < maxPage) {
    currentPage++;
    fetchCharacters(currentPage);
    pagination.textContent = `${currentPage} / ${maxPage}`;
  }
}

export {prevPage, nextPage};
