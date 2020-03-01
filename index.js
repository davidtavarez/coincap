const fetch = require("node-fetch");

module.exports = async function coincap(coin, protocol = "https") {
  const response = await fetch(
    `${protocol}://api.coincap.io/v2/assets/${coin}`,
    { method: "GET", cache: "no-cache", redirect: "follow" }
  );
  return await response.json();
};
