export const formatHour = (episodes, duration) => {
  const totalDuration = episodes * duration;
  const hours =
    totalDuration < 0 ? (totalDuration * -1) / 60 : totalDuration / 60;
  const newHour = Math.floor(hours);
  const hourInt = Math.floor((hours % 1) * 100);
  const minutesToDecimal = (hourInt * 60) / 100;
  const minutes = Math.ceil(minutesToDecimal);

  if (newHour === 0) {
    return `${minutes} minutos`;
  }

  if (newHour === 60) {
    return `${hours} hora`;
  }

  if (minutes === 0) {
    return `${newHour} horas`;
  }

  return `${newHour} horas, ${minutes} minutos`;
};
