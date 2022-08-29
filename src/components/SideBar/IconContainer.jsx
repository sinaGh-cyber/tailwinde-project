const IconContainer = ({ children, isActive }) => {
  return (
    <div
      className={`w-5 h-5 relative mb-3  rounded-full ${
        isActive ? 'bg-orange-200' : 'bg-gray-200'
      }`}
    >
      {children}
    </div>
  );
};

export default IconContainer;
