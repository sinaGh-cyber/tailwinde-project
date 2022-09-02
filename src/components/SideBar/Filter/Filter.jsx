import DisClosure from '../../DisClosure/DisClosure';
import { brandsData } from './brandsData';
import { colorData } from './colorData';
import BrandSvg from './icons/BrandSvg';
import ColorSwitchSvg from './icons/ColorSwitchSvg';
import PriceSvg from './icons/PriceSvg';
import { priceData } from './priceData';



const Filter = () => {
  return (
    <div className="text-right ">
        <div className='font-bold text-xl text-orange-400 mb-6' >فیلتر</div>
        <DisClosure Icon={<BrandSvg/>} data={brandsData} title='برند'/>
        <DisClosure Icon={<ColorSwitchSvg/>} data={colorData} title='رنگ' />
        <DisClosure Icon={<PriceSvg/>} data={priceData} title='قیمت' />
    </div>
  );
};

export default Filter;
