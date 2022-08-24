import { useState } from 'react';
import e2p from '../../utility/functions/e2p';
import Colors from './Colors';
import HeartSvg from './heartSvg';

const Product = ({ name, price, colors, isLastOne, image, brand }) => {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <li className="bg-stone-50  p-2 w-full rounded-xl shadow-lg flex flex-col">
      <div className="bg-slate-200 mb-5 rounded-lg flex justify-center items-center relative">
        <img className="my-4" src={image} alt={name} />
        <span
          onClick={() => {
            setIsSaved((prev) => !prev);
          }}
          className="w-7 h-7 md:w-8 md:h-8 bg-gray-300 cursor-pointer rounded-full flex justify-center items-center absolute top-2 right-2"
        >
          <HeartSvg isSaved={isSaved} />
        </span>
      </div>

      <div className="flex flex-row-reverse justify-between items-center w-full mb-3">
        <span className="text-slate-300 text-right text-sm md:text-base font-medium">
          {brand}
        </span>
        <div className="flex">
          {colors.map((color, index) => {
            return <Colors color={color} index={index} key={index} />;
          })}{' '}
        </div>
      </div>

      <p className="font-medium text-center text-base text-slate-900 mb-3 ">
        {name}
      </p>
      <div className=" flex flex-row-reverse gap-1 justify-center items-center font-medium text-right text-lg md:text-xl text-orange-700 mb-4 ">
        <p>{e2p(price)}</p> <p>تومان</p>
      </div>

      <hr />
      <button className="text-base text-orange-400 font-bold text-center py-2 cursor-pointer md:text-lg">
        مشاهده و سفارش
      </button>
    </li>
  );
};

export default Product;
