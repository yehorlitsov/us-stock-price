import { useEffect } from 'react';
import useStockPriceStore from '../../stores/stock-price.store';
import Card from '../../lib/ui/card/Card';
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
                      <Card.CardHeader>
                        <div className='grid grid-cols-[auto,1fr] gap-4 items-center'>
                          <Building2 size={42} />
                          <div>
                            <h6 className='text-2xl'>{company}</h6>
                            <div className='flex gap-2'>
                              <a className='text-[#0ea5e9] hover:underline cursor-pointer'>
                                View Dashboard
                              </a>
                              <span>|</span>
                              <a className='text-[#0ea5e9] hover:underline cursor-pointer'>
                                Add to Portfolio
                              </a>
                            </div>
                          </div>
                        </div>
                      </Card.CardHeader>
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
