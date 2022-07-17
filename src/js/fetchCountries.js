export function fetchCountries(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('No data found');
    }
    return response.json();
  });
}
