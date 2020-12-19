export default function getPer100() {
  return (context, value, population) => {
    const { optTotalPer100 } = context;
    const returnValue = optTotalPer100 === 'total' ? value : (value / (population / 100000)).toFixed(1);
    return returnValue;
  }
}