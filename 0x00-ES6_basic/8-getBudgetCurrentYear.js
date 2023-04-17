function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`Symbol(income-${getCurrentYear()})`] = income;
  budget[`Symbol(gdp-${getCurrentYear()})`] = gdp;
  budget[`Symbol(capita-${getCurrentYear()})`] = capita;

  return budget;
}
