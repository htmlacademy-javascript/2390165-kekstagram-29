/**
 * @param {string} url
 * @param {RequestInit} [options]
 */
async function request(url, options) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(String(response.status));
  }

  return response.json();
}

export {
  request,
};
