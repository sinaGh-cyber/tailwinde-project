import FilterSvg from './FilterSvg';
import SortDescending from './SortDescendingSvg';

const SortAndFilter = () => {
  return (
    <div className="flex items-center justify-between px-4 gap-x-4 mb-9">
      <div className="bg-stone-50 rounded py-2 pr-4 flex flex-row-reverse items-center justify-start w-1/2">
        <div className=" text-slate-800">
          <FilterSvg/>
        </div>
        <span className="mr-3 text-sm font-medium text-right ">فیلتر: اپل</span>
      </div>
      <div className="bg-stone-50 rounded py-2 pr-4 flex flex-row-reverse items-center justify-start w-1/2">
        <div className=" text-slate-800    ">
          <SortDescending />
        </div>
        <span className="mr-3 text-sm font-medium text-center ">محبوب&zwnj;ترین</span>
      </div>
    </div>
  );
};

export default SortAndFilter;
