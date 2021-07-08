export function getSummary() {
  return fetch('http://localhost:3004/summary')
    .then(data => data.json())
}
