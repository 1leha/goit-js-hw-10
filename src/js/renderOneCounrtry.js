import { Country } from './classCountry';

export function renderOneCounrtry({
  flags,
  name,
  capital,
  population,
  languages,
}) {
  const country = new Country({
    flags,
    name,
    capital,
    population,
    languages,
  });

  return `
        <div class="country-info__title">
            <div class="country-info__thumb">
                <img class="country-info__img" src="${country.flag}" alt="Flag of ${country.name}" width="30"/>
            </div>
        <span class="country-info__country-name">${country.name}</span>
        </div>
        <ul class="country-info__list">
            <li class="country-info__item"><span class="country-info__cathegory">Capital: </span>${country.capital}</li>
            <li class="country-info__item"><span class="country-info__cathegory">Population: </span>${country.population}</li>
            <li class="country-info__item"><span class="country-info__cathegory">Languages: </span>${country.languages}</li>
        </ul>
`;
}
