export function apiImitation(duration, data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: data
      })
    }, duration)
  })
}
