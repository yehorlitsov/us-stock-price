interface CompanyData {
  times: number[];
  prices: number[];
}

export interface Stock {
  [company: string]: CompanyData;
}
