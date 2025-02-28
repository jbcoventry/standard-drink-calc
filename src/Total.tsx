type PropTypes = {
  volume: number;
  percentage: number;
};

function Total({ volume, percentage }: PropTypes) {
  return <>Total: {Math.round(volume * percentage * 0.0789) / 100}</>;
}
export default Total;
