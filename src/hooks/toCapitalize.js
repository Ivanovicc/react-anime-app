export const toCapitalize = (str) => {
  if (typeof str === "string" || str === "") {
    const result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
  } else {
    return "most be an string!";
  }
};
