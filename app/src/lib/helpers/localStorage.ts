export const safeGetItem = (key: string, defaultValue = '{}') => {
  try {
    return JSON.parse(localStorage.getItem(key) || defaultValue);
  } catch (e) {
    console.log(e);
  }
  return JSON.parse(defaultValue);
};
