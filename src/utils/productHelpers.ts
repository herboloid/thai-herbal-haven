export const getProductName = (productId: number, t: Function): string => {
  const translationKey = `productNames.${productId}`;
  const translated = t(translationKey);
  
  // If translation not found, return fallback
  if (translated === translationKey) {
    console.warn(`Translation missing for product ${productId}`);
    return `Product ${productId}`;
  }
  
  return translated;
};

export const getProductDescription = (productId: number, t: Function): string => {
  const translationKey = `productDescriptions.${productId}`;
  const translated = t(translationKey);
  
  // If translation not found, return empty string
  if (translated === translationKey) {
    console.warn(`Description translation missing for product ${productId}`);
    return '';
  }
  
  return translated;
};
