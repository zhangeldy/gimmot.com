export default function sortObject(reducers) {
  let result = {};
  Object.keys(reducers).sort().forEach(key => {
    result[key] = reducers[key]
  });
  return result;
}
