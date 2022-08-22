import FilterSvg from "./FilterSvg";
import SortDescending from "./SortDescendingSvg";

const Mobile = () => {
  return (
    <div className="flex flex-col xsm:flex-row items-center justify-between px-4 gap-y-2 xsm:gap-y-0 xsm:gap-x-4 md:hidden ">
      <div className="bg-stone-50 rounded py-2 pr-4 flex flex-row-reverse items-center justify-center xsm:justify-start w-full xsm:w-1/2 cursor-pointer ">
        <div className=" text-slate-800">
          <FilterSvg />
        </div>
        <span className="mr-3 text-sm font-medium text-right ">فیلتر: اپل</span>
      </div>
      <div className="bg-stone-50 rounded py-2 pr-4 flex flex-row-reverse items-center justify-center xsm:justify-start w-full xsm:w-1/2 cursor-pointer ">
        <div className=" text-slate-800    ">
          <SortDescending />
        </div>
        <span className="mr-3 text-sm font-medium text-center ">
          محبوب&zwnj;ترین
        </span>
      </div>
    </div>
  );
};

export default Mobile;
