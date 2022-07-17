import { liElementMarkup } from './liElementMarkup';

export function renderCountryList(data) {
  return data.reduce((elementsList, li) => {
    return (elementsList += liElementMarkup(li));
  }, '');
}
