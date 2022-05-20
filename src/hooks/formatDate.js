import dayjs from "dayjs";

export const formatDate = (params1, params2) => {
  const start = dayjs(params1).format("MMM. D, YYYY");
  const end = dayjs(params2).format("MMM. D, YYYY");
  if (!params2) {
    return `${start}`;
  }
  if (!params1 && !params2) {
    return "";
  }
  if (params1 === params2) {
    return `${start}`;
  }
  return `${start} hasta ${end}`;
};
