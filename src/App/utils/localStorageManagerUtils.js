export const setValuesToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getValuesFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const removeValuesFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
