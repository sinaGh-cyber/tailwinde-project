import { useState } from 'react';
import SortAscendingSvg from './SortAscendingSvg';
import SortDescending from './SortDescendingSvg';
import {
  CHEAPEST,
  HOT_SAILING,
  MOST_EXPENSIVE,
  MOST_Favorite,
} from './tabTypes';

const hoverClassName =
  'hover:text-slate-800 hover:font-bold hover:bg-stone-100';
const activeClassName = 'text-slate-800 font-bold';

const Desktop = ({ onClick, activeTab }) => {
  const [isAscending, setIsAscending] = useState(true);
  return (
    <div className="   bg-stone-50 w-full p-1 rounded-md hidden md:flex justify-end gap-x-3 lg:gap-x-8 items-center text-base font-medium text-gray-300 pr-2 ">
      <button
        onClick={onClick}
        className={`${
          activeTab === MOST_Favorite && activeClassName
        } ${hoverClassName} p-4 relative rounded-md `}
        name={MOST_Favorite}
      >
        محبوب ترین
        {activeTab === MOST_Favorite && (
          <span className=" bg-orange-400 w-1 h-1 absolute rounded-full top-4 left-1"></span>
        )}
      </button>
      <button
        onClick={onClick}
        className={`${
          activeTab === HOT_SAILING && activeClassName
        }  ${hoverClassName} p-4 relative rounded-md`}
        name={HOT_SAILING}
      >
        پرفروش ترین
        {activeTab === HOT_SAILING && (
          <span className=" bg-orange-400 w-1 h-1 absolute rounded-full top-4 left-1"></span>
        )}
      </button>
      <button
        onClick={onClick}
        className={`${
          activeTab === MOST_EXPENSIVE && activeClassName
        } ${hoverClassName} p-4 relative rounded-md`}
        name={MOST_EXPENSIVE}
      >
        گران ترین
        {activeTab === MOST_EXPENSIVE && (
          <span className=" bg-orange-400 w-1 h-1 absolute rounded-full top-4 left-1"></span>
        )}
      </button>
      <button
        className={`${
          activeTab === CHEAPEST && activeClassName
        } ${hoverClassName} p-4  relative rounded-md`}
        onClick={onClick}
        name={CHEAPEST}
      >
        ارزان ترین
        {activeTab === CHEAPEST && (
          <span className=" bg-orange-400 w-1 h-1 absolute rounded-full top-4 left-1"></span>
        )}
      </button>
      <button
        className="flex justify-center items-center w-10 h-10 bg-orange-100 rounded-md"
        onClick={() => {
          setIsAscending((prev) => !prev);
        }}
      >
        {isAscending ? <SortAscendingSvg /> : <SortDescending />}
      </button>
    </div>
  );
};

export default Desktop;
