export default function sortReducers(reducers) {
  let result = {};
  Object.keys(reducers).sort().forEach(key => {
    result[key] = reducers[key]
  });
  return result;
}
