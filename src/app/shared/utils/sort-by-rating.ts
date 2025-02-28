export function sortProductsByRating(products: any[]) {
  return products.sort((a, b) => {
    if (b.rating.rate >= 4.5 && a.rating.rate < 4.5) {
      return 1;
    } else if (a.rating.rate >= 4.5 && b.rating.rate < 4.5) {
      return -1;
    } else {
      return 0;
    }
  });
}
