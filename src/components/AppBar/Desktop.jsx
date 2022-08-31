import LogoSvg from './LogoSvg';
import SearchBar from './SearchBar';
import ShoppingCartSvg from './ShoppingCartSvg';
import UserSvg from './UserSvg';

const Desktop = () => {
  return (
    <nav className="hidden md:flex flex-row-reverse  justify-between items-center mx-4 mb-5 py-2 px-4 bg-white rounded-md shadow-lg text-slate-800  sticky top-0 z-10">
      <div className="">
        <LogoSvg />
      </div>
      <ul className="flex flex-row-reverse justify-end items-center gap-5 w-11/12">
        <li className="flex-1 mr-4 lg:ml-[20rem] justify-self-stretch ">
          <SearchBar />
        </li>
        <li className='rounded-md overflow-hidden' >
          <a href="#1">
            <ShoppingCartSvg />
          </a>
        </li>
        <li className='rounded-md overflow-hidden ' >
          <a href="#2">
            <UserSvg />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Desktop;
