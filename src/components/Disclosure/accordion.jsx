import { useState } from 'react';
import ChevronDown from './ChevronDown';

const Accordion = ({ qAndA }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className=" cursor-pointer flex justify-between items-center bg-blue-600 rounded-md p-2 text-white"
      >
        <span>{qAndA.question}</span> <ChevronDown isOpen={isOpen} />{' '}
      </div>
      {isOpen && <div className="p-2  transition-all animate-hidden-to-visible">
        {qAndA.answer}
      </div>}
    </div>
  );
};

export default Accordion;
