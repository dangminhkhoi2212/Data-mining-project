let minmax = {
  area: { min: 7551, max: 18913 },
  perimeter: { min: 359.1000061035156, max: 548.4459838867188 },
  majorAxisLength: { min: 145.26446533203125, max: 207560241699218.0 },
  minorAxisLength: { min: 59.532405853271484, max: 8899755859375.0 }, //xlsx
  eccentricity: { min: 0.7772325873374939, max: 0.9480069279670715 },
  convexArea: { min: 7723.0, max: 19099.0 },
  extent: { min: 0.49741286039352417, max: 0.8610495328903198 },
};
const calculator = (x, min, max) => {
  return (x - min) / (max - min);
};
export const minmaxScaler = (data) => {
  console.log("🚀 ~ minmaxScaler ~ data:", data);

  return Object.keys(data).map((key) => {
    const { min, max } = minmax[key];
    const x = Number(data[key]);
    return calculator(x, min, max);
  });
};
