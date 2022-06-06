export const formatHour = (duration) => {
  const hours = duration < 0 ? (duration * -1) / 60 : duration / 60;
  const newHour = Math.floor(hours);
  const hourInt = Math.floor((hours % 1) * 100);
  const minutesToDecimal = (hourInt * 60) / 100;
  const minutes = Math.floor(minutesToDecimal);

  if (newHour === 0) {
    return `${minutes} minutos en total`;
  }

  if (newHour === 60) {
    return `${hours} hora en total`;
  }

  if (minutes === 0) {
    return `${newHour} horas en total`;
  }

  return `${newHour} hrs, ${minutes} mins en total`;
};
