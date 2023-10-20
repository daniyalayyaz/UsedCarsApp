export const priceRangeConverter = (price) => {
  let minPrice, maxPrice;
  if (price === "Over $35000") {
    minPrice = 35000;
    maxPrice = Number.MAX_SAFE_INTEGER;
  } else {
    const splitPrice = price.split("-");
    minPrice = parseInt(splitPrice[0]);
    maxPrice = parseInt(splitPrice[1]);
  }

  return { minPrice, maxPrice };
};

export const yearRangeConverter = (year) => {
  let minYear, maxYear;
  if (year === "2021 onwards") {
    minYear = 2021;
    maxYear = Number.MAX_SAFE_INTEGER;
  } else {
    const splitYear = year.split("-");
    minYear = parseInt(splitYear[0]);
    maxYear = parseInt(splitYear[1]);
  }

  return { minYear, maxYear };
};
export const mileageRangeConverter = (mileage) => {
  let minMileage, maxMileage;
  if (mileage === "20,000 over") {
    minMileage = 20000;
    maxMileage = Number.MAX_SAFE_INTEGER;
  } else {
    const splitMileage = mileage.split("-");
    minMileage = parseInt(splitMileage[0]);
    maxMileage = parseInt(splitMileage[1]);
  }

  return { minMileage, maxMileage };
};

export const CCRangeConverter = (cc) => {
  let minCC, maxCC;
  if (cc === "over 3500") {
    minCC = 3500;
    maxCC = Number.MAX_SAFE_INTEGER;
  } else {
    const splitCC = cc.split("-");
    minCC = parseInt(splitCC[0]);
    maxCC = parseInt(splitCC[1]);
  }

  return { minCC, maxCC };
};
