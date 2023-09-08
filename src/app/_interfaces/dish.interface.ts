export interface IDish {
  ID: string;
  name: string;
  images: string[];
  imgHref: string;
  priceV2: {
    amountDisplay: string;
    amountInMinor: number;
  };
  position: number;
  _currency: {
    code: string;
    symbol: string;
    exponent: number;
    ISOSymbol: string;
  };
  available: boolean;
  sortOrder: number;
  campaignID: string;
  description: string;
  campaignName: string;
  modifierGroups: any[]; // Replace with the actual type if available
  priceInMinorUnit: number;
  discountedPriceV2: {
    amountDisplay: string;
    amountInMinor: number;
  };
  discountedPriceInMin: number;
}
