// TODO: add and export your own actions
const ROOT_URL = 'https://api-endpoint.igdb.com';

export const FETCH_RANDOM_GAMES = 'FETCH_RANDOM_GAMES';

export function fetchRandomGames(){
  const promise = fetch(`${ROOT_URL}/games`, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'user-key':'612b1c1dbab36b712875640428cfe934',
      'Accept':'application/json'}
  })
    .then(r => r.json());

  return{
    type: FETCH_RANDOM_GAMES,
    payload: promise
  }
}
