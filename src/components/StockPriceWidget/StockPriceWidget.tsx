import { useEffect } from 'react';
import useStockPriceStore from '../../stores/stock-price.store';
import Card from '../../lib/ui/Card';
import { Building2 } from 'lucide-react';

export default function StockPriceWidget() {
  const { stocks, isLoading, fetchStocks } = useStockPriceStore();

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <>
      <div>
        {isLoading && <div>Loading...</div>}
        {!isLoading && stocks && (
          <div className='grid p-4 grid-cols-3 gap-4'>
            {Object.entries(stocks).map(([company, data], index) => {
              return (
                <Card key={index}>
                  <div>
                    <img src='' alt='' />
                    <div>
                      <div className='grid grid-cols-[auto,1fr] gap-2 items-center'>
                        <Building2 />
                        <h6 className='text-2xl'>{company}</h6>
                      </div>

                      <div>
                        <button>View Dashboard</button>
                        <button>Add to Portfolio</button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
