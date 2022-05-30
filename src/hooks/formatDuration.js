export const formatHour = (duration) => {
  const hours = duration / 60;
  const newHour = Math.floor(hours);
  const hourInt = Math.floor((hours % 1) * 100);
  const minutesToDecimal = (hourInt * 60) / 100;
  const minutes = Math.floor(minutesToDecimal);

  if (duration < 60) {
    return `${duration}  min en total`;
  }

  if (duration === 60) {
    return `${hours}  hora en total`;
  }

  if (minutes === 0) {
    return `${newHour}  hr en total`;
  }

  return `${newHour}  hr, ${minutes}  min en total`;
};
