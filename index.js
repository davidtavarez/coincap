export default async function assets(coin, protocol) {
  const response = await fetch(
      `${protocol}://api.coincap.io/v2/assets/${coin}`,
      {method: 'GET', cache: 'no-cache', redirect: 'follow'});
  return await response.json();
};
