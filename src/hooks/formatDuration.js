export const formatHour = (hour) => {
  const hours = hour / 60;
  const newHour = Math.floor(hours);
  const hourInt = Math.floor((hours % 1) * 100);
  const minutesToDecimal = (hourInt * 60) / 100;
  const minutes = Math.floor(minutesToDecimal);

  if (minutes === 0) {
    return `${newHour} horas en total`;
  }

  return `${newHour} horas, ${minutes} minutos en total`;
};
