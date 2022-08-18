const Colors = ({ color, index }) => {
  const translatesX = {
    0: 'translate-x-0',
    1: '-translate-x-1',
    2: '-translate-x-2',
    3: '-translate-x-3',
    4: '-translate-x-4',
    5: '-translate-x-5',
    6: '-translate-x-6',
  };
  return (
    <div
      className={`${translatesX[index]} translate-x-0 border-2 border-white border-solid ${color} w-5 h-5 md:w-6 md:h-6 rounded-full`}
    ></div>
  );
};

export default Colors;
