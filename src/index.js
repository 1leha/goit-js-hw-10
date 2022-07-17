import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { renderCountryList } from './js/renderCountryList';
import debounce from 'lodash.debounce';
import notiflix from 'notiflix';
import { clearCountries } from './js/clearCountries';
import { renderOneCounrtry } from './js/renderOneCounrtry';

const DEBOUNCE_DELAY = 300;
const BASE_API_ENDPOINT_URL = 'https://restcountries.com/v3.1';
const SERVICE = 'name';
const FAIL_MESSAGE = 'Oops, there is no country with that name';
const TOO_MANY_MATCHES_MESSAGE =
  'Too many matches found. Please enter a more specific name.';

const refs = {
  searchBox: document.getElementById('search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
const searchParam = new URLSearchParams({
  fields: ['name', 'capital', 'population', 'flags', 'languages'],
});

refs.searchBox.focus();
refs.searchBox.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const searchingCountries = refs.searchBox.value;
  const urlLink = `${BASE_API_ENDPOINT_URL}/${SERVICE}/${searchingCountries.trim()}?${searchParam}`;

  if (!searchingCountries) {
    clearCountries(refs);
    return;
  }

  fetchCountries(urlLink)
    .then(data => {
      if (data.length > 10) {
        clearCountries(refs);
        notiflix.Notify.info(TOO_MANY_MATCHES_MESSAGE);
        return;
      }

      if (data.length > 1) {
        clearCountries(refs);
        refs.countryInfo.classList?.remove('active');
        refs.countryList.innerHTML = renderCountryList(data);
        return;
      }

      clearCountries(refs);
      if (refs.countryInfo.classList.contains('active')) {
        return;
      }
      refs.countryInfo.classList.add('active');
      refs.countryInfo.innerHTML = renderOneCounrtry(...data);
    })
    .catch(error => {
      clearCountries(refs);
      notiflix.Notify.failure(FAIL_MESSAGE);
    });
}
