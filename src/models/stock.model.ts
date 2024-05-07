export interface CompanyData {
  times: number[];
  prices: number[];
}

export interface Stock {
  [company: string]: CompanyData;
}

export interface TransformedCompanyData {
  time: number;
  price: number;
}

export interface TransformedStock {
  company: string;
  data: TransformedCompanyData[];
}
