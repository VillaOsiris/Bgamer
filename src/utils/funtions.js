export const formatPrice = (number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "genre") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
