const Checkbox = ({ name, label }) => {
  return (
    <label className="flex justify-end items-center  gap-x-4  p-2 cursor-pointer animate-hidden-to-visible"  htmlFor={name}>
      <div>{label}</div>
      <input
        type="checkbox"
        name={name}
        id={name}
        className={`
        form-checkbox  rounded-md w-6 h-6 border-slate-800 border-2 
        focus:ring-0 focus:ring-transparent cursor-pointer
        focus:checked:ring-0 focus:checked:border-3 focus:checked:border-orange-400  focus:checked:ring-transparent 
        focus:checked:bg-orange-300 checked:border-orange-400 checked:bg-orange-300 checked:hover:bg-orange-300 `}
      />
    </label>
  );
};

export default Checkbox;
