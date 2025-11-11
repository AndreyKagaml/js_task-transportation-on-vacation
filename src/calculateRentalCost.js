/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;

  const totalPrice = days * PRICE_PER_DAY;

  if (days >= 3 && days < 7) {
    return totalPrice - 20;
  }

  if (days >= 7) {
    return totalPrice - 50;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
