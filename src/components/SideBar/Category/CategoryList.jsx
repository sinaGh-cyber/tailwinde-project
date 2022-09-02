import CategoryItem from './CategoryItem';
import LaptopIcon from './icons/LaptopIcon';
import MobileIcon from './icons/MobileIcon';
import SmartWatchIcon from './icons/SmartWatchIcon';

const CategoryList = () => {
  return (
    <div
      className="flex flex-col justify-center items-end gap-y-6 mb-5
    "
    >
      <div className="text-xl font-bold text-orange-400 text-right mr-2">
        دسته بندی
      </div>
      <ul className="text-xl w-full font-normal text-slate-800 text-right flex flex-col gap-y-1  ">
        <CategoryItem name={'تلفن همراه'} isActive={true} Icon={MobileIcon} />
        <CategoryItem name={'لپ تاپ'} isActive={false} Icon={LaptopIcon} />
        <CategoryItem
          name={'ساعت هوشمند'}
          isActive={false}
          Icon={SmartWatchIcon}
        />
      </ul>
    </div>
  );
};

export default CategoryList;
