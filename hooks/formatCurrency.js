function formatCurrency(int) {
  var formatter = new Intl.NumberFormat("en-US");

  return formatter.format(int) + " ₭";
}

export default formatCurrency;
