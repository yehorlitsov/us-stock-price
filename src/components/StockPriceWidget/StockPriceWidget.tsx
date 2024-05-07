import { useEffect } from 'react';
import useStockPriceStore from '../../stores/stock-price.store';
import Card from '../../lib/ui/card/Card';
import { Building2 } from 'lucide-react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const StockPriceWidgetLoading = () => {
  return (
    <>
      {[1, 2, 3].map((item, index) => (
        <Card key={index}>
          <Card.CardHeader>
            <div className='grid grid-cols-[auto,1fr] gap-4 items-center'>
              <Skeleton height={42} width={36} className='flex' />
              <div>
                <Skeleton height={28} width={'40%'} className='flex' />
                <Skeleton height={20} width={'70%'} className='flex' />
              </div>
            </div>
          </Card.CardHeader>
        </Card>
      ))}
    </>
  );
};

export default function StockPriceWidget() {
  const { stocks, isLoading, fetchStocks } = useStockPriceStore();

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <>
      <div className='grid p-4 xl:grid-cols-3 lg:grid-cols-2 gap-4'>
        {isLoading && <StockPriceWidgetLoading />}
        {!isLoading &&
          stocks &&
          Object.entries(stocks).map(([company, data], index) => {
            return (
              <Card key={index}>
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
              </Card>
            );
          })}
      </div>
    </>
  );
}
