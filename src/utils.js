export const setTheme = (theme) => {
  if (!['dark', 'light'].includes(theme)) throw new Error(`"${theme}" is not a valid value.`);
  document.getElementById('header').dataset.theme = theme;
};
