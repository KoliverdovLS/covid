
export default function filterCountries(context) {
  try {
    return (array) => array.filter((i) => RegExp(`^${context.search}.*`, 'i').test(i.Country)).sort((a, b) => {
      return b[context.getCorrectTypeOfData()] - a[context.getCorrectTypeOfData()];
    });
  } catch (error) {
    throw new Error();
  }
}

