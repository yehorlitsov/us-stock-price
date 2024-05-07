import {
  Stock,
  TransformedCompanyData,
  TransformedStock,
} from '../../models/stock.model';

export function transformStockData(stockData: Stock): TransformedStock[] {
  // Create an array to hold the transformed data
  const transformedData: TransformedStock[] = [];

  // Iterate over each property in the stockData object
  Object.entries(stockData).forEach(([company, { times, prices }]) => {
    // Create an array to hold the time and price data for the current company
    const companyData: TransformedCompanyData[] = [];

    // Loop through the times array
    times.forEach((time, index) => {
      // Push an object containing the time and corresponding price to companyData
      companyData.push({
        time: time,
        price: prices[index],
      });
    });

    // Push the current company and its data to the transformedData array
    transformedData.push({
      company: company,
      data: companyData,
    });
  });

  return transformedData;
}
