import dayjs from "dayjs";

export const formatDate = (params1, params2) => {
  const start = dayjs(params1).format("D MMM. YYYY");
  const end = dayjs(params2).format("D MMM. YYYY");
  if (params2 === null) {
    return `${start}`;
  }

  if (params1 === params2) {
    return `${start}`;
  }
  return `${start}  hasta  ${end}`;
};
