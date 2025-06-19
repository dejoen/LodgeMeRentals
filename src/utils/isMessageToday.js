export default (date) => {
  const today = new Date();

  return date.getDate() === today.getDate() && date.getMonth() && date.getFullYear() === today.getFullYear();
};
