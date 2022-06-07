export const convertFormatCurrencies = (number, decimals) => {
  return number.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: decimals,
  });
};
