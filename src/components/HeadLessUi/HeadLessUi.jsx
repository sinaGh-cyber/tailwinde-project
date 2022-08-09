import ChevronDownSvg from './ChevronDownSvg';

const HeadLessUi = () => {
  return (
    <div className="relative ">
      <button className=" px-4 py-2 bg-blue-500 text-white rounded-lg flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white">
        <span>show more</span>
        <ChevronDownSvg />
      </button>
      <div className="bg-white w-56 rounded-lg overflow-hidden mt-1 absolute ">
        <a href="#/" className="block p-4 hover:bg-gray-100">
          setting
        </a>
        <a href="#/" className="block p-4 hover:bg-gray-100">
          Home
        </a>
        <a href="#/" className="block p-4 hover:bg-gray-100">
          About us
        </a>
      </div>
    </div>
  );
};

export default HeadLessUi;
