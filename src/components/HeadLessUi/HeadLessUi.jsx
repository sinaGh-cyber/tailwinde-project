import { useState } from 'react';
import ChevronDownSvg from './ChevronDownSvg';
import ChevronUpSvg from './ChevronUpSvg';

const HeadLessUi = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative ">
      <button
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        className=" px-4 py-2 z-10 relative bg-blue-500 text-white rounded-lg flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white"
      >
        <span>show more</span>
        {isOpen ? <ChevronUpSvg /> : <ChevronDownSvg />}
      </button>
      <div
        className={`inset-0  bg-gray-400  ${isOpen ? 'fixed' : 'hidden'}`}
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
      <div
        className={`bg-white w-56 rounded-lg overflow-hidden mt-1 opacity-70 ${
          isOpen ? 'absolute' : 'hidden'
        }`}
      >
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
