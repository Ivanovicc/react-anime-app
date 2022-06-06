export const formatHour = (episodes, duration) => {
  const totalDuration = episodes * duration;
  const hours =
    totalDuration < 0 ? (totalDuration * -1) / 60 : totalDuration / 60;
  const newHour = Math.floor(hours);
  const hourInt = Math.floor((hours % 1) * 100);
  const minutesToDecimal = (hourInt * 60) / 100;
  const minutes = Math.ceil(minutesToDecimal);

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
