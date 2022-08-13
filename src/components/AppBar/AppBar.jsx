import LogoSvg from './LogoSvg';
import SearchSvg from './SearchSvg';

const AppBar = ({ category }) => {
  return (
    <div className="flex justify-between items-center mt-10 mb-6 ">
      <div className="bg-white p-2 rounded flex items-center justify-center shadow-md ml-6 ">
        <SearchSvg />
      </div>
      <div className="">
        {category || (
          <span className="drop-shadow-xl text-slate-800 text-2xl text-center font-sans font-bold">
            {' '}
            دسته&zwnj;بندی
          </span>
        )}
      </div>
      <div className="mr-6">
        <LogoSvg />
      </div>
    </div>
  );
};

export default AppBar;
