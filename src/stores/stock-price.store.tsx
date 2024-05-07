import { create } from 'zustand';
import { getStocks } from '../services/stock-price-api.service';
import { Stock } from '../models/stock.model';

interface StockPriceStore {
  stocks: Stock | null;
  isLoading: boolean;
  fetchStocks: () => Promise<void>;
}

const useStockPriceStore = create<StockPriceStore>((set) => ({
  stocks: null,
  isLoading: false,
  fetchStocks: async () => {
    set({ isLoading: true });
    try {
      const stocks = await getStocks();
      // @ts-expect-error
      set({ stocks, isLoading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
      set({ isLoading: false });
    }
  },
}));

export default useStockPriceStore;
