function total(volume: number, percentage: number) {
  return Math.round(volume * percentage * 0.0789) / 100;
}
export default total;
