import SearchSvg from './SearchSvg';

const SearchBar = () => {
  return (
    <div className="bg-gray-100 flex items-center rounded-lg p-1 ">
      <input
        dir="rtl"
        placeholder="نام محصول، برند یا رنگ ..."
        className="focus:outline-none bg-transparent w-full p-2 text-slate-800 border-none focus:border-none focus:ring-0"
        type="text"
      />{' '}
      <span className="mr-2 cursor-pointer">
        <SearchSvg />
      </span>
    </div>
  );
};

export default SearchBar;
