const current = new Date();

const getCurrentDate = () =>
  new Date(
    current.getTime() - current.getTimezoneOffset() * 6000
  ).toISOString();
const getDate = () => current.getDate();
const getMonth = () => current.getMonth();
const getYear = () => current.getFullYear.toString.slice(2, 4);
const getFullYear = () => current.getFullYear();

export { getCurrentDate, getDate, getMonth, getYear, getFullYear };
