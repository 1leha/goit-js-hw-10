export function liElementMarkup({ flags, name }) {
  return `
          <li class="country-list__item">
          <div class="country-list__thumb">
        <img class="country-list__img" src="${flags.svg}" alt="Flag of ${name.official}" width="30"/>
        </div>
        <span class="country-list__country-name">${name.official}</span>
      </li>
    `;
}
