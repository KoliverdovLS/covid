export default function changeFilterOption(context) {
  return (data) => {
    const obj = {
      All: 'all',
      ['Last day']: 'day',
      Total: 'total',
      ['per 100 k']: 'per',
    };
    const obj1 = {
      All: 'optAllLastDay',
      ['Last day']: 'optAllLastDay',
      Total: 'optTotalPer100',
      ['per 100 k']: 'optTotalPer100',
    }
    context[obj1[data]] = obj[data];
  }
}

// is not used 19.12.2020