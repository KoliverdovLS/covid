
export default function filterCountries(context) {
  return (array) => array.filter((i) => RegExp(`^${context.search}.*`, 'i').test(i.Country));
}

