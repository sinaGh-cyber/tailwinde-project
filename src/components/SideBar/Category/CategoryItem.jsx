const CategoryItem = ({ name, Icon, isActive }) => {
  return (
    <li className=" flex justify-end items-center gap-x-5 px-2 py-4  rounded-md cursor-pointer hover:bg-gray-100 ">
      <div className={`text-right ${isActive ? 'text-slate-900' : 'text-slate-600'} `}>{name}</div>
      {<Icon isActive={isActive} />}
    </li>
  );
};

export default CategoryItem;
