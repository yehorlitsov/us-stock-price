import { Stock } from '../models/stock.model';

export async function getStocks(): Promise<Stock | unknown> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      try {
        const response = await fetch('/mocks/mocked-stocks.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        const data = await response.json();

        resolve(data);
      } catch (error) {
        // console.error('Error fetching stocks:', error);
        resolve(error);
      }
    }, 1000);
  });
}
