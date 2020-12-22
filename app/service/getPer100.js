export default function getPer100() {
  return (context, value, population) => {
    const { optTotalPer100, hundredThousand } = context;
    const returnValue = optTotalPer100 === 'total' ? value : (value / (population / hundredThousand)).toFixed(1);
    return returnValue;
  }
}