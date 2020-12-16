
export default function filterCountries(context) {
  return (array) => array.filter((i) => RegExp(`^${context.search}.*`, 'i').test(i.Country)).sort((a, b) => {
    return b[context.getCorrectTypeOfData()] - a[context.getCorrectTypeOfData()];
  });
}

