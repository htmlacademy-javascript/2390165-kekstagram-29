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


function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle(callback, delayBetweenFrames) {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}
export {
  request,
  debounce,
  throttle
};
