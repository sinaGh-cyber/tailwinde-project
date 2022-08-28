import { useState } from 'react';
import Checkbox from './CheckBox';
import ChevronDownSvg from './ChevronDownSvg';

const DisClosure = ({ Icon, data, title }) => {
  const [isExpended, setIsExpended] = useState(false);

  return (
    <div className="mb-11">
      <div
        onClick={() => {
          setIsExpended((prev) => !prev);
        }}
        className="flex justify-end gap-5 px-2 py-4 mb-5 rounded-md hover:bg-gray-100 cursor-pointer "
      >
        <ChevronDownSvg isExpended={isExpended} />
        <div className="mt-1">{title} محصول</div>
        {Icon}
      </div>
      <div
        className={` flex flex-col gap-y-7  ${isExpended ? 'block' : 'hidden'}`}
      >
        {' '}
        {data.map(({ name, label }) => {
          return <Checkbox name={name} label={label} key={name} />;
        })}
      </div>
    </div>
  );
};

export default DisClosure;
